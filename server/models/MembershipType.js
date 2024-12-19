const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const MembershipType = sequelize.define("membership_type", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },  
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { MembershipType };
