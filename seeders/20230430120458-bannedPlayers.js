"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bannedUsers",
      [
        {
          name: "Билли Митчелл",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Фрэнк Абигнейл",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Пицца с ананасами",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Декаф кофе",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Б/А пиво",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
