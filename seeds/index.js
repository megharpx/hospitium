const seedComments = require("./comment-seeds");
const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

// Seed snyc function
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n-------- DB SUCCESS! ----------\n");
  await seedUsers();
  console.log("\n-------- USERS HAVE BEEN SEEDED! ----------\n");
  await seedPosts();
  console.log("\n-------- POSTS HAVE BEEN SEEDED! ----------\n");
  await seedComments();
  console.log("\n-------- COMMENTS HAVE BEEN SEEDED! ----------\n");
  process.exit(0);
};

seedAll();
