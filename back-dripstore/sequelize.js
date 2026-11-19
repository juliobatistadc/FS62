const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dripstore', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

async function testConnection(){
    try {
      await sequelize.authenticate({force: true});
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    sequelize,
    testConnection
}