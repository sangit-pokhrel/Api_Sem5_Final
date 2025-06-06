class User {
  constructor({
    userId,
    fullname,
    username,
    email,
    password,
    address,
    ctznNo,
    country,
    province,
    city,
    phonenumber,
    role,
    profilepic,
    status,
    rating,
    createdAt,
    updatedAt,
    lastLogin,
    lastLoginIp,
    lastLoginLocation,
    lastLoginDevice,
    totalServiceRequests,
    totalServiceCompleted,
    totalServiceCancelled,
    totalServicePending,
    totalServiceInProgress,
  }) {
    this.userId = userId;
    this.fullname = fullname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.address = address;
    this.ctznNo = ctznNo;
    this.country = country;
    this.province = province;
    this.city = city;
    this.phonenumber = phonenumber;
    this.role = role;
    this.profilepic = profilepic;
    this.status = status;
    this.rating = rating;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.lastLogin = lastLogin;
    this.lastLoginIp = lastLoginIp;
    this.lastLoginLocation = lastLoginLocation;
    this.lastLoginDevice = lastLoginDevice;
    this.totalServiceRequests = totalServiceRequests;
    this.totalServiceCompleted = totalServiceCompleted;
    this.totalServiceCancelled = totalServiceCancelled;
    this.totalServicePending = totalServicePending;
    this.totalServiceInProgress = totalServiceInProgress;
  }
}

module.exports = User;
