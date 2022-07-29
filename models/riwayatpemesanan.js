"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class riwayatPemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      riwayatPemesanan.belongsTo(models.user);
    }
  }
  riwayatPemesanan.init(
    {
      userId: DataTypes.INTEGER,
      tanggal: DataTypes.DATE,
      namaProduk: DataTypes.STRING,
      jumlah: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "riwayatPemesanan",
    }
  );
  return riwayatPemesanan;
};
