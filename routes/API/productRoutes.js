const express = require("express");
const productRoutes = express.Router();
const productController = require("../../controllers/product");
const multer = require("multer");
const { getStorage } = require("../../helpers/cloudinary");
const authAdmin = require("../../middleware/authAdmin");

const storage = getStorage();
const upload = multer({
  storage,
});

productRoutes.post(
  "/createBarang",
  authAdmin.checkLoginAdmin,
  upload.any(),
  productController.createBarang
);
productRoutes.get("/getAllBarang", productController.getAllBarang);
productRoutes.get("/getDetailBarang/:id", productController.getDetailBarang);
productRoutes.put(
  "/editBarang/:id",
  authAdmin.checkLoginAdmin,
  upload.any(),
  productController.editBarang
);
productRoutes.delete(
  "/deleteBarang/:id",
  authAdmin.checkLoginAdmin,
  productController.deleteBarangById
);

module.exports = productRoutes;
