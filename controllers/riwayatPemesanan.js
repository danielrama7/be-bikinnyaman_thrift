require("dotenv").config({ path: "./.env" });
const db = require("../models/index.js");
const jwt = require("jsonwebtoken");

module.exports.editStatus = async function (req, res) {
  try {
    const { id } = req.params;
    const status = "Sudah Bayar";
    const editData = {
      status,
    };

    const editedData = await db.riwayatPemesanan.findByPk(id);

    if (!editedData) {
      return res.status(404).json({
        sucess: false,
        message: "Barang tidak ditemukan",
      });
    }

    editedData.update(editData);

    return res.status(200).json({
      success: true,
      data: editedData,
      message: "Edit berhasil",
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      error: error,
      message: error.message,
    });
  }
};
