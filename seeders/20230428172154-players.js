"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ScoreBoards",
      [
        {
          name: "John Doe",
          score: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sophia Zhirnova",
          score: 50000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anna Makarova",
          score: 600050,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Roman Sokolov",
          score: 10150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Player",
          score: 200,
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
