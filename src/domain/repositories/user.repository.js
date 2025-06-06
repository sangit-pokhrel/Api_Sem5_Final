class userRepository {
  //create methods
  async createUserById(id, user) {}
  async createUserByEmail(email, user) {}
  async createUserByUsername(username, user) {}
  async createUserByPhoneNumber(phoneNumber, user) {}
  async createUser(user) {}
  //find by email
  async findByEmail(email) {}

  //get all users
  async getAllUsers() {}

  //get all users by role
  async getAllUsersByRole(role) {}

  //get all users by status
  async getAllUsersByStatus(status) {}

  //other get methods
  async getUserById(id) {}
  async getUserByEmail(email) {}
  async getUserByUsername(username) {}
  async getUserByPhoneNumber(phoneNumber) {}

  //update methods
  async updateUserById(id, user) {}
  async updateUserByEmail(email, user) {}
  async updateUserByUsername(username, user) {}
  async updateUserByPhoneNumber(phoneNumber, user) {}

  //delete methods
  async deleteUserById(id) {}
  async deleteUserByEmail(email) {}
  async deleteUserByUsername(username) {}
  async deleteUserByPhoneNumber(phoneNumber) {}

  // forget password apis repo
  findByRoleAndPhone(role, phone) {}
  findByRoleAndEmail(role, email) {}
  updatePassword(userId, hashedPassword) {}

  //upload files
  async uploadProfilePic(id, filePath) {}
}

module.exports = userRepository;
