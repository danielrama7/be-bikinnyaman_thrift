const express = require("express");
const riwayatPemesananRoutes = express.Router();
const riwayatPemesananController = require("../../controllers/riwayatPemesanan");
const auth = require("../../middleware/auth");

riwayatPemesananRoutes.put(
  "/edit-status/:id",
  auth.checkLogin,
  riwayatPemesananController.editStatus
);

module.exports = riwayatPemesananRoutes;
