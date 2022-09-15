const { User } = require("../models");

const userData = [
  {
    username: "BarbaraJ",
    email: "barbjones@email.com",
    password: "pass@123",
  },
  {
    username: "JohnSmith",
    email: "johns@email.com",
    password: "drowssap",
  },
  {
    username: "JackieCole",
    email: "jcoleman@email.com",
    password: "password1",
  },
  {
    username: "Jason",
    email: "hehehahajasonjasonjason@email.com",
    password: "campcrystallake",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
