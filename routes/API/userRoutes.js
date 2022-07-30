const express = require("express");
const userRoutes = express.Router();
const userController = require("../../controllers/user");
const auth = require("../../middleware/auth");

userRoutes.post("/login", userController.login);
userRoutes.post("/logout", userController.logout);
userRoutes.post("/register", userController.register);
userRoutes.get("/getUserData/:id", userController.getUserDetail);
userRoutes.patch(
  "/editInformasiAkun",
  auth.checkLogin,
  userController.editInformasiAkun
);

module.exports = userRoutes;
