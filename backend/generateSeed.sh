npm run schema:sync
npx sequelize-cli db:seed --seed 20220217200446-user-seed.js
npx sequelize-cli db:seed --seed investor-seed.js
npx sequelize-cli db:seed --seed 20220217212917-company.js
npx sequelize-cli db:seed --seed 20220217195954-estate.js
npx sequelize-cli db:seed --seed 20220217203723-appartment.js