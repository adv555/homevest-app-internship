/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const companies = await queryInterface.sequelize.query(
        `select id from "company";`
    );
    const estates = [];
    for(let i = 0; i<companies[0].length; i++){
      const estate = {
        companyId: companies[0][i].id,
        estateName: 'estateName',
        estateLogo: 'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png',
        numberOfFlats: 108,
        numberOfBuildings: 2,
        constructionDetails: 'constructionDetails',
        amountOfMoney: '7265145',
        location: 'Ukraine',
        status: 'not started',
        fundingState: '5886786',
        annualReturn: 5,
        duration: 36,
        distribution : 4,
        profit: '26553',
        favorite: false,
      };
      estates.push(estate);
    }
    await queryInterface.bulkInsert('estate', estates);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('estate', null, {})
  },
};
