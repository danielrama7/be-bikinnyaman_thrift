"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "admins",
      [
        {
          id: 1,
          email: "admin@gmail.com",
          password:
            "$2a$12$3JiS3l.98AEOcTOhcRIL8.0fxJR6rD3rwOEYJrzzYOZ8qLDE0lylW",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
