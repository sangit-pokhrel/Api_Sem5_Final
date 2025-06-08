const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

// Store: { contactKey: { otp, expiresAt } }
const sentOtps = new Map();

const generateOtp = () =>
  otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });

async function sendEmail(to, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"ServiceHub OTP" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your OTP Code",
    html: `
      <p>Hello,</p>
      <p>Your OTP code is: <strong>${otp}</strong></p>
      <p>This OTP is valid for <strong>5 minutes</strong>.</p>
      <p>If you didn't request this, please ignore.</p>
      <br/>
      <p>– ServiceHub Team</p>
    `,
  });
}

function sanitizeContact(contact) {
  return contact.trim().toLowerCase();
}

module.exports = {
  async sendOtp(contact) {
    const cleanContact = sanitizeContact(contact);
    const otp = generateOtp();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

    sentOtps.set(cleanContact, { otp, expiresAt });

    if (cleanContact.includes("@")) {
      await sendEmail(cleanContact, otp);
    } else {
      console.log(`📱 OTP for ${cleanContact}: ${otp}`);
    }

    return otp;
  },

  async verifyOtp(contact, enteredOtp) {
    const cleanContact = sanitizeContact(contact);
    const record = sentOtps.get(cleanContact);
    if (!record) return false;

    const { otp, expiresAt } = record;

    if (Date.now() > expiresAt) {
      sentOtps.delete(cleanContact);
      return false;
    }

    const isValid = otp === enteredOtp;
    if (isValid) sentOtps.delete(cleanContact); // Remove after use

    return isValid;
  },
};
