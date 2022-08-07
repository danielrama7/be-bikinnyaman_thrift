const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../../controllers/admin");

adminRoutes.post("/loginAdmin", adminController.loginAdmin);
adminRoutes.post("/logoutAdmin", adminController.logoutAdmin);

module.exports = adminRoutes;
