const sequelize = require("./db");
const { User } = require("./User");
const { Gym } = require("./Gym");
const { MembershipType } = require("./MembershipType");
const { UserMembership } = require("./UserMembership");
const { Class } = require("./Class");

UserMembership.belongsTo(User, { foreignKey: "user_id" });
UserMembership.belongsTo(MembershipType, { foreignKey: "membership_type_id" });

module.exports = {
  sequelize,
  User,
  Gym,
  MembershipType,
  UserMembership,
  Class,
};
