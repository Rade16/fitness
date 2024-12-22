const { Gym } = require("../models/Gym");
const sequelize = require("../db");

class GymController {
  async create(req, res) {
    try {
      console.log("Полученные данные:", req.body);
      const { name, adress, latitude, longitude, description } = req.body;

      const image = req.file ? `/uploads/${req.file.filename}` : null;
      const newGym = await Gym.create({
        name,
        adress,
        latitude,
        longitude,
        description,
        image,
      });
      return res.json(newGym);
    } catch (e) {
      console.log(e);
    }
  }

  async getAll(req, res) {
    try {
      const gyms = await Gym.findAll();
      return res.json(gyms);
    } catch (e) {
      console.log(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const gym = await Gym.findByPk(id);
      return res.json(gym);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new GymController();
