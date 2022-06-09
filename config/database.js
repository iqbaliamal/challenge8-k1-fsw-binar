require("dotenv").config();

const {
  DB_USER = "azis",
  DB_PASSWORD = "",
  DB_NAME = "db_challenge8",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: "zeslxbsxlcjrkd",
    password: "6fceb405276cfa813f4bf720c7f43dac6230a560e9afede767f1abd22f54d65f",
    database: "d1vm8qm110chjg",
    host: "ec2-54-165-178-178.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      }
    }
  }
}
