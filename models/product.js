"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init(
    {
      namaProduk: DataTypes.STRING,
      deskripsi: DataTypes.TEXT,
      jenis: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      kategori: DataTypes.STRING,
      ukuran: DataTypes.STRING,
      warna: DataTypes.STRING,
      stok: DataTypes.INTEGER,
      gambarUtama: DataTypes.STRING,
      gambar1: DataTypes.STRING,
      gambar2: DataTypes.STRING,
      gambar3: DataTypes.STRING,
      gambar4: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
