const { Sequelize } = require('sequelize');
require("./models/userModel")

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('dripstore', 'postgres', '2116', {
  host: 'localhost',
  dialect: 'postgres'
});

async function testConnection(){
    try {
      await sequelize.sync({force:true});
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

testConnection()

module.exports = {
    sequelize,
    testConnection
}