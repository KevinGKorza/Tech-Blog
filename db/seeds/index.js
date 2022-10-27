const seedComment = require('./comment');
const seedPost = require('./post');
const seedUser = require('./user');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedComment();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPost();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- TAGS SEEDED -----\n');


  process.exit(0);
};

seedAll();


