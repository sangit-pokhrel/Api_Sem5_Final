const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const jwtUtil = {
  // Generate a token
  generate: (payload, expiresIn = "1d") =>
    jwt.sign(payload, secret, { expiresIn }),

  // Verify a token
  verify: (token) => {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      return null; // or throw error, depending on use case
    }
  },

  // Decode without verifying
  decode: (token) => jwt.decode(token),

  // Optionally refresh token (if payload is valid)
  refresh: (token, expiresIn = "1d") => {
    try {
      const decoded = jwt.verify(token, secret);
      delete decoded.iat;
      delete decoded.exp;
      return jwt.sign(decoded, secret, { expiresIn });
    } catch (err) {
      return null;
    }
  },
};

module.exports = jwtUtil;
