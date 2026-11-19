require("./models/relations");

const { userCreate, createUsers, findUser,findUserByEmail, updateUser, deleteUser, getAllusers } = require("./seeders/userHandle");
const { testConnection } = require("./sequelize");

testConnection();

// userCreate({ firstName: "julio", surName: "cesar batista da silva", email: "julio@gmail.com", password: "teste" });
// createUsers();
async function teste(){
    // await findUserByEmail("patricia19@gmail.com");
    // await updateUser({firstName: 'abc'}, 20);
    // await findUserByEmail("patricia19@gmail.com");
    // await getAllusers();
    // await deleteUser(20);
}

teste()