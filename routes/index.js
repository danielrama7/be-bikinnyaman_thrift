var express = require("express");
const adminRoutes = require("./API/adminRoutes");
var apiRouter = express.Router();
const riwayatPemesananRoutes = require("./API/riwayatPemesananRoutes");
const userRoutes = require("./API/userRoutes");

apiRouter.use("/user", userRoutes);
apiRouter.use("/admin", adminRoutes);
apiRouter.use("/riwayatPemesanan", riwayatPemesananRoutes);

module.exports = apiRouter;
