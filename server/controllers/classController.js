const { Class } = require("../models/Class");
const sequelize = require("../db");

class ClassController {
  async create(req, res) {
    console.log("Полученные данные:", req.body);
    const { name, time, days } = req.body;
    const newClass = await Class.create({ name, time, days });
    return res.json(newClass);
  }
  async getAll(req, res) {
    const classes = await Class.findAll();
    return res.json(classes);
  }
}

module.exports = new ClassController();
