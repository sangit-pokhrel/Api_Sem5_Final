import User from "./user";

class serviceProvider extends User {
  constructor({
    userId,
    serviceCompleted,
    csatscore,
    isServiceVerified,
    experienceYears,
    serviceType,
    serviceField,
    shopName,
    shopLocation,
    minimumCharge,
    comments,
  }) {
    super({
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
    });

    this.experienceYears = experienceYears;
    this.shopName = shopName;
    this.shopLocation = shopLocation;
    this.minimumCharge = minimumCharge;
    this.serviceCompleted = serviceCompleted;
    this.csatscore = csatscore;
    this.isServiceVerified = isServiceVerified;
    this.serviceType = serviceType;
    this.serviceField = serviceField;
    this.comments = comments;
  }
}

module.exports = serviceProvider;
