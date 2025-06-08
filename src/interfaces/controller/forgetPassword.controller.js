const ForgotPasswordUseCase = require("../../domain/use-cases/forgetPassword.usecases");
const HashService = require("../../infrastructures/services/hash.service");
const OtpService = require("../../infrastructures/services/otp.service");
const UserRepoImpl = require("../../infrastructures/database/UserRepoImpl");

const useCase = ForgotPasswordUseCase({
  userRepo: UserRepoImpl,
  hashService: HashService,
  otpService: OtpService,
});

module.exports = {
  verifyPhone: async (req, res) => {
    try {
      const { role, phone } = req.body;
      const result = await useCase.verifyPhone(role, phone);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  verifyEmail: async (req, res) => {
    try {
      const { role, email } = req.body;
      const result = await useCase.verifyEmail(role, email);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  validateOtp: async (req, res) => {
    try {
      const { contact, otp } = req.body;
      await useCase.verifyOtp(contact, otp);
      res.json({ valid: true });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

resetPassword: async (req, res) => {
  try {
    const { userId, newPassword, confirmPassword, role } = req.body;

    if (!userId || !newPassword || !confirmPassword || !role) {
      throw new Error("Missing required fields");
    }

    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    await useCase.resetPassword(role, userId, newPassword);
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

};
