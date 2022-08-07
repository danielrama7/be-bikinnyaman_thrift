require("dotenv").config({ path: "./.env" });
const db = require("../models/index.js");
const jwt = require("jsonwebtoken");
const { deleteCloudPicture } = require("../helpers/cloudinary");

module.exports.createBarang = async function (req, res) {
  const { namaProduk, deskripsi, jenis, harga, kategori, ukuran, warna, stok } =
    req.body;

  const updateData = {
    namaProduk,
    deskripsi,
    jenis,
    harga,
    kategori,
    ukuran,
    warna,
    stok,
  };

  if (req.files) {
    for (i = 0; i < req.files.length; i++) {
      if (req.files[i].fieldname == "gambarUtama") {
        updateData.gambarUtama = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar1") {
        updateData.gambar1 = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar2") {
        updateData.gambar2 = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar3") {
        updateData.gambar3 = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar4") {
        updateData.gambar4 = req.files[i].path;
      }
    }
  }

  // check if name exist
  try {
    const existBarang = await db.product.findOne({ where: { namaProduk } });
    if (existBarang) {
      if (updateData.gambarUtama) deleteCloudPicture(updateData.gambarUtama);
      if (updateData.gambar1) deleteCloudPicture(updateData.gambar1);
      if (updateData.gambar2) deleteCloudPicture(updateData.gambar2);
      if (updateData.gambar3) deleteCloudPicture(updateData.gambar3);
      if (updateData.gambar4) deleteCloudPicture(updateData.gambar4);
      return res.status(409).json({
        success: false,
        message: "Barang sudah ada",
      });
    }

    const updatedData = await db.product.create(updateData);

    return res.status(200).json({
      success: true,
      data: updatedData,
      message: "Barang added!",
    });
  } catch (error) {
    if (updateData.gambarUtama) deleteCloudPicture(updateData.gambarUtama);
    if (updateData.gambar1) deleteCloudPicture(updateData.gambar1);
    if (updateData.gambar2) deleteCloudPicture(updateData.gambar2);
    if (updateData.gambar3) deleteCloudPicture(updateData.gambar3);
    if (updateData.gambar4) deleteCloudPicture(updateData.gambar4);
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};

module.exports.getAllBarang = async function (req, res) {
  try {
    const barang = await db.product.findAll({
      attributes: [
        "id",
        "namaProduk",
        "deskripsi",
        "jenis",
        "harga",
        "kategori",
        "ukuran",
        "warna",
        "stok",
        "gambarUtama",
        "gambar1",
        "gambar2",
        "gambar3",
        "gambar4",
      ],
    });
    if (!barang) {
      return res.status(404).json({
        success: false,
        message: "Barang not found",
      });
    }
    return res.status(200).json({
      sucess: true,
      data: barang,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};

module.exports.getDetailBarang = async function (req, res) {
  try {
    const detailBarang = await db.product.findByPk(req.params.id, {
      attributes: [
        "id",
        "namaProduk",
        "deskripsi",
        "jenis",
        "harga",
        "kategori",
        "ukuran",
        "warna",
        "stok",
        "gambarUtama",
        "gambar1",
        "gambar2",
        "gambar3",
        "gambar4",
      ],
    });
    if (!detailBarang) {
      return res.status(404).json({
        success: false,
        message: "Barang not found",
      });
    }
    return res.status(200).json({
      sucess: true,
      data: detailBarang,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};

module.exports.editBarang = async function (req, res) {
  const { id } = req.params;
  const { namaProduk, deskripsi, jenis, harga, kategori, ukuran, warna, stok } =
    req.body;

  const editData = {
    namaProduk,
    deskripsi,
    jenis,
    harga,
    kategori,
    ukuran,
    warna,
    stok,
  };

  if (req.files) {
    for (i = 0; i < req.files.length; i++) {
      if (req.files[i].fieldname == "gambarUtama") {
        editData.gambarUtama = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar1") {
        editData.gambar1 = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar2") {
        editData.gambar2 = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar3") {
        editData.gambar3 = req.files[i].path;
      }
      if (req.files[i].fieldname == "gambar4") {
        editData.gambar4 = req.files[i].path;
      }
    }
  }
  try {
    const existBarang = await db.product.findOne({ where: { namaProduk } });
    const editedData = await db.product.findByPk(id);
    if (existBarang && editData.namaProduk != editedData.namaProduk) {
      if (editData.gambarUtama) deleteCloudPicture(editData.gambarUtama);
      if (editData.gambar1) deleteCloudPicture(editData.gambar1);
      if (editData.gambar2) deleteCloudPicture(editData.gambar2);
      if (editData.gambar3) deleteCloudPicture(editData.gambar3);
      if (editData.gambar4) deleteCloudPicture(editData.gambar4);
      return res.status(409).json({
        success: false,
        message: "Nama barang sudah ada",
      });
    }

    if (!editedData) {
      return res.status(404).json({
        sucess: false,
        message: "Barang not found!",
      });
    }

    await editedData.update(editData);

    return res.status(200).json({
      success: true,
      data: editedData,
      message: "Edit Succes!",
    });
  } catch (error) {
    if (editData.gambarUtama) deleteCloudPicture(editData.gambarUtama);
    if (editData.gambar1) deleteCloudPicture(editData.gambar1);
    if (editData.gambar2) deleteCloudPicture(editData.gambar2);
    if (editData.gambar3) deleteCloudPicture(editData.gambar3);
    if (editData.gambar4) deleteCloudPicture(editData.gambar4);
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};

module.exports.deleteBarangById = async function (req, res) {
  try {
    const { id } = req.params;

    const deletedData = await db.product.findByPk(id);

    if (!deletedData) {
      return res.status(404).json({
        sucess: false,
        message: "Barang not found!",
      });
    }

    if (deletedData.gambarUtama) deleteCloudPicture(deletedData.gambarUtama);
    if (deletedData.gambar1) deleteCloudPicture(deletedData.gambar1);
    if (deletedData.gambar2) deleteCloudPicture(deletedData.gambar2);
    if (deletedData.gambar3) deleteCloudPicture(deletedData.gambar3);
    if (deletedData.gambar4) deleteCloudPicture(deletedData.gambar4);

    await deletedData.destroy();

    return res.status(200).json({
      success: true,
      data: deletedData,
      message: "Sucess delete Barang",
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};
