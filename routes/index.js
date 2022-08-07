var express = require("express");
const adminRoutes = require("./API/adminRoutes");
const productRoutes = require("./API/productRoutes");
var apiRouter = express.Router();
const riwayatPemesananRoutes = require("./API/riwayatPemesananRoutes");
const userRoutes = require("./API/userRoutes");

apiRouter.use("/user", userRoutes);
apiRouter.use("/admin", adminRoutes);
apiRouter.use("/product", productRoutes);
apiRouter.use("/riwayatPemesanan", riwayatPemesananRoutes);

module.exports = apiRouter;
