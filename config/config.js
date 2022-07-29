module.exports = {
  development: {
    username: "postgres",
    password: "30050tup",
    loging: true,
    database: "bikinnyaman-thrift",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "pkfvnngsjberwt",
    password:
      "1e6f2bfdb9987f4fa0940d7f92c8a992fa8ebc577f8e4f14c90287851899839b",
    database: "d9tjmt2ngef7t2",
    host: "ec2-52-72-56-59.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
