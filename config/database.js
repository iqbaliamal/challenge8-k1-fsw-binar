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
    database: `${DB_NAME}`,
    host: DB_HOST,
    // port: DB_PORT,
    dialect: "postgres",
    ssl: true,
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: "luwfmfcozoysoo",
    password:
      "93b3ac6bdb2e31328234c4c2e399c338c0a0bb2ecc5debc7484291b95864bb03",
    database: "d5qv55rcl1ij4t",
    host: "ec2-54-165-178-178.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
