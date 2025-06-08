module.exports = function ForgotPasswordUseCase({
  userRepo,
  hashService,
  otpService,
}) {
  return {
    async verifyPhone(role, phone) {
      const user = await userRepo.findByRoleAndPhone(role, phone);
      if (!user) throw new Error("User not found.");
      const otp = await otpService.sendOtp(phone);
      return { userId: user.id, otpSent: true };
    },

    async verifyEmail(role, email) {
      const user = await userRepo.findByRoleAndEmail(role, email);
      if (!user) throw new Error("User not found.");
      const otp = await otpService.sendOtp(email); // assume email as contact
      return { userId: user.id, otpSent: true };
    },

    async verifyOtp(contact, otp) {
      const valid = await otpService.verifyOtp(contact, otp);
      if (!valid) throw new Error("Invalid OTP.");
      return true;
    },

  async resetPassword(role, userId, newPassword) {
  if (!role || !userId || !newPassword) {
    throw new Error("Missing required fields");
  }

  const hashed = await hashService.hash(newPassword);
  await userRepo.updatePasswordById(role, userId, hashed);
  return true;
}


  };
};
