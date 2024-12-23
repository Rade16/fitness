const { UserMembership, MembershipType } = require("../models");

class MembershipController {
  async buyMembership(req, res) {
    try {
      const { userId, membershipTypeId } = req.body;

      // Получаем тип абонемента
      const membershipType = await MembershipType.findByPk(membershipTypeId);
      if (!membershipType) {
        return res.status(404).json({ message: "Абонемент не найден" });
      }

      // Устанавливаем даты начала и конца абонемента
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(startDate.getDate() + 30);

      // Проверяем, есть ли у пользователя активный абонемент
      const existingMembership = await UserMembership.findOne({
        where: { user_id: userId },
      });

      if (existingMembership) {
        // Обновляем текущий абонемент
        await existingMembership.update({
          membership_type_id: membershipTypeId,
          start_date: startDate,
          end_date: endDate,
        });
      } else {
        // Создаём новый абонемент
        await UserMembership.create({
          user_id: userId,
          membership_type_id: membershipTypeId,
          start_date: startDate,
          end_date: endDate,
        });
      }

      res
        .status(200)
        .json({ message: "Абонемент успешно приобретён или обновлён" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ошибка при покупке абонемента" });
    }
  }
  async getCurrentMembership(req, res) {
    try {
      console.log(req.params.id);
      const { id } = req.params;
      const membership = await UserMembership.findOne({
        where: { user_id: id },
        include: MembershipType,
      });
      if (!membership) {
        return res.status(404).json({ message: "Абонемент не найден" });
      }
      return res.json({
        type: membership.membership_type.name,
        price: membership.membership_type.price,
        endDate: membership.end_date,
      });
    } catch (error) {
      res.status(500).json({ message: "Ошибка сервера", error });
    }
  }
}

module.exports = new MembershipController();
