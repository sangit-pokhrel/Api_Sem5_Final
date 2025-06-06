const bcrypt = require("bcryptjs");

module.exports = {
  hash: async (plain) => {
    try {
      return await bcrypt.hash(plain, 10);
    } catch (err) {
      console.error("Hashing error:", err);
      throw err;
    }
  },

  compare: async (plain, hash) => {
    try {
      return await bcrypt.compare(plain, hash);
    } catch (err) {
      console.error("Comparison error:", err);
      throw err;
    }
  },
};
