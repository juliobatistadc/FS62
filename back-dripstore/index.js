require("./models/relations");

const userCreate = require("./seeders/userCreate");
const {testConnection} = require("./sequelize");

testConnection();

userCreate({firstName: "julio", surName: "cesar batista da silva", email: "abcd", password: "teste"});