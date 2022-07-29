"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          namaLengkap: "Putra",
          email: "putra@gmail.com",
          password:
            "$2a$12$tvYOmJqn2M7lIap9lmVsZOpzlVxUXHCD9aUeeZN5jptLQ8b9UNtlO",
          alamat: "Jl. Asep Berlian No.31",
          provinsi: "Jawa Barat",
          kabupatenKota: "Bandung",
          kecamatan: "Cibeuinying Kidul",
          kelurahan: "Cicadas",
          kodePos: "40121",
          noTelp: "081313283176",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        },
        {
          id: 2,
          namaLengkap: "Putri",
          email: "putri@gmail.com",
          password:
            "$2a$12$QREFuxbsQMkjtp0Xjt7XzeScOyplSZl/BuxTRt38PVxdoU7F09aGq",
          alamat: "Jl. Asep Berlian No.31",
          provinsi: "Jawa Barat",
          kabupatenKota: "Bandung",
          kecamatan: "Cibeuinying Kidul",
          kelurahan: "Cicadas",
          kodePos: "40121",
          noTelp: "081313283176",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
