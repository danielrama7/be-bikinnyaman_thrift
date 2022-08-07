"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          namaProduk: "Poliester Kyuck Goo Jaket Putih",
          deskripsi: "BLABLABLABLA",
          jenis: "Wanita",
          harga: 100000,
          kategori: "Jaket",
          ukuran: "L",
          warna: "Putih",
          stok: 1,
          gambarUtama:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.581c28d8e84c4f249820.jpg",
          gambar1:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.1.e5328ea143e601184f54.jpg",
          gambar2:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.2.d0522c6661e57dea4244.jpg",
          gambar3:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.3.8c437722affc948fe171.jpg",
          gambar4:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.4.239270f5c6e92e20d77b.jpg",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        },
        {
          id: 2,
          namaProduk: "Poliester Kyuck Goo Jaket Putih",
          deskripsi: "BLABLABLABLA",
          jenis: "Wanita",
          harga: 100000,
          kategori: "Jaket",
          ukuran: "L",
          warna: "Putih",
          stok: 1,
          gambarUtama:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.581c28d8e84c4f249820.jpg",
          gambar1:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.1.e5328ea143e601184f54.jpg",
          gambar2:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.2.d0522c6661e57dea4244.jpg",
          gambar3:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.3.8c437722affc948fe171.jpg",
          gambar4:
            "https://bikinnyaman-thrift.vercel.app/static/media/product3.4.239270f5c6e92e20d77b.jpg",
          createdAt: "2022-01-01 00:00:00",
          updatedAt: "2022-01-01 00:00:00",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
