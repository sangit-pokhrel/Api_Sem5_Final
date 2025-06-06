const otpGenerator = require("otp-generator");

const sentOtps = new Map();

module.exports = {
  async sendOtp(contact) {
    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });

    sentOtps.set(contact, otp);
    console.log(`OTP for ${contact}: ${otp}`);
    return otp;
  },

  async verifyOtp(contact, otp) {
    return sentOtps.get(contact) === otp;
  },
};
