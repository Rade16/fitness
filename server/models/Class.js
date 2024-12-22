const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Class = sequelize.define("class", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  days: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Class };
