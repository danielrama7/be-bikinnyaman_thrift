"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      namaProduk: {
        type: Sequelize.STRING,
      },
      deskripsi: {
        type: Sequelize.TEXT,
      },
      jenis: {
        type: Sequelize.STRING,
      },
      harga: {
        type: Sequelize.INTEGER,
      },
      kategori: {
        type: Sequelize.STRING,
      },
      ukuran: {
        type: Sequelize.STRING,
      },
      warna: {
        type: Sequelize.STRING,
      },
      stok: {
        type: Sequelize.INTEGER,
      },
      gambarUtama: {
        type: Sequelize.STRING,
      },
      gambar1: {
        type: Sequelize.STRING,
      },
      gambar2: {
        type: Sequelize.STRING,
      },
      gambar3: {
        type: Sequelize.STRING,
      },
      gambar4: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
