'use strict';
require('dotenv').config()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColoumn('user', 'password_digest', {
      type: sequelize.DataTypes.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'password_digest')
  }
};
