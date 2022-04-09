/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        firstName: 'Jou',
        lastName: 'Dou',
        email: 'test1@mail.com',
        password: '$2b$08$Z4hk0aO06xuOizBuBZjtSOX04xUDCc7bACg14noJ00uUUM1/ZKSYK',
        role: 'investor',
        isActivated: true,
      },
      {
        firstName: 'Jou',
        lastName: 'Dou',
        email: 'test2@mail.com',
        password: '$2b$08$Z4hk0aO06xuOizBuBZjtSOX04xUDCc7bACg14noJ00uUUM1/ZKSYK',
        role: 'investor',
        isActivated: true,
      },
      {
        firstName: 'Jou',
        lastName: 'Dou',
        email: 'test3@mail.com',
        password: '$2b$08$Z4hk0aO06xuOizBuBZjtSOX04xUDCc7bACg14noJ00uUUM1/ZKSYK',
        role: 'developer',
        isActivated: true,
      },
      {
        firstName: 'Jou',
        lastName: 'Dou',
        email: 'test4@mail.com',
        password: '$2b$08$Z4hk0aO06xuOizBuBZjtSOX04xUDCc7bACg14noJ00uUUM1/ZKSYK',
        role: 'developer',
        isActivated: true,
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {})
  },
};