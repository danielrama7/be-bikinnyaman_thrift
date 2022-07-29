"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "riwayatPemesanans",
      [
        {
          id: 1,
          userId: 1,
          tanggal: "2022-01-01 00:00:00",
          namaProduk: "Sweater / Crewneck Pastel Mint Blue GAP",
          jumlah: 1,
          total: 100000,
          status: "Belum Bayar",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        },
        {
          id: 2,
          userId: 1,
          tanggal: "2022-01-01 00:00:00",
          namaProduk: "Sweater / Crewneck Pastel Mint Blue GAP",
          jumlah: 1,
          total: 100000,
          status: "Sudah Bayar",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("riwayatPemesanans", null, {});
  },
};
