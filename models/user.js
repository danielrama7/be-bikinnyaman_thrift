"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.riwayatPemesanan);
    }
  }
  user.init(
    {
      namaLengkap: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      alamat: DataTypes.STRING,
      provinsi: DataTypes.STRING,
      kabupatenKota: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      kelurahan: DataTypes.STRING,
      kodePos: DataTypes.STRING,
      noTelp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
