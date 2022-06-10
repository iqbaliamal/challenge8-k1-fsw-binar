"use strict";

const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { Role } = require("../../app/models");

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "password";
    const encryptedPassword = bcrypt.hashSync(password);
    const timestamp = new Date();

    const role = await Role.findOne({
      where: {
        name: "ADMIN",
      },
    });

    const users = [
      {
        name: "Admin",
        email: "admin@binar.co.id",
        encryptedPassword,
        roleId: role.id,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: "Admin2",
        email: "admin2@binar.co.id",
        encryptedPassword,
        roleId: role.id,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ];

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  },
  
};
