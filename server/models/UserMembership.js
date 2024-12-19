const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const UserMembership = sequelize.define("UserMembership", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
});

module.exports = { UserMembership };
