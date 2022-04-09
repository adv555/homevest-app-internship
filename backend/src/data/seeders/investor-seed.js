/* eslint-disable @typescript-eslint/no-unused-vars */

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = await queryInterface.sequelize.query(
            `select id from "user";`
        );
        const roles = await queryInterface.sequelize.query(
            `select role from "user";`
        );
        const investors = [];
        for(let i = 0; i<users[0].length; i++){
            if(roles[0][i].role == "investor"){
                const investor = {
                    userId: users[0][i].id,
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg',
                    username: 'user123',
                    followersCount: 10,
                    followingCount: 20,
                    interest: "Interest",
                    investment: "investment",
                    publication: "publication",
                    city: "Kiev",
                    phoneNumber: "044502930",
                    paymentMethods: "payment",
                    zipcode: "a2334",
                };
                investors.push(investor);
            }
        }
        await queryInterface.bulkInsert('investor', investors);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('investor', null, {})
    }
}