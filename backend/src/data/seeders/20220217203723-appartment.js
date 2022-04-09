/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const estates = await queryInterface.sequelize.query(
      `select id from "estate";`
    );
    const appartments = [];
    for(let i = 0; i<estates[0].length; i++){
      const appartment = {
            estateId: estates[0][i].id,
            nameOfBuilding: 'RC Rainbow',
            numberOfRooms: '4',
            numberOfBathrooms: '1',
            typeOfParking: 'underground',
            price: '500 000',
            priceForM2: '1000',
            location: 'Kyiv',
            appartmentClass: 'comfort',
            floors: '9',
            appartmentState: 'no repair',
            currency: 'dollar',
            yearOfOperation: '2021',
            salesStatus: 'Started',
            investmentType: 'payment via bank card',
            lending: true,
            installments: false,
            mortgage: true,
            images: 'https://wallpaperaccess.com/full/1859246.jpg ',
      };
      appartments.push(appartment);
    }
    await queryInterface.bulkInsert('appartment', appartments);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('appartment', null, {})
  }
}
