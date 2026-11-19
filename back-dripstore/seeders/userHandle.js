const User = require("../models/userModel");
const fs = require("fs/promises");

async function userCreate(user) {
    try {
        const newUser = await User.create(user);
        console.log(newUser);
    } catch (e) {
        console.log(e.message);
    }
}

async function createUsers() {

    try {
        const usersJson = await fs.readFile('./seeders/userSeeder.json');
        const users = JSON.parse(usersJson);
        const usersDB = await User.bulkCreate(users);

        console.log(usersDB);
    } catch (e) {
        console.log(e.message);
    }
}

async function findUser(id) {
    try {
        const userDB = await User.findByPk(id);
        console.log(userDB);
    } catch (e) {
        console.log(e.message)
    }
}

async function findUserByEmail(email) {
    try {
        const userDB = await User.findOne({ where: { email: email } });
        console.log(userDB);
    } catch (e) {
        console.log(e.message)
    }
}

async function updateUser(info, id) {
    try {
        await User.update(
            info,
            { where: { id: id }}
        );
    } catch (e) {
        console.log(e.message);
    }
}

async function deleteUser(id){
    try{
        const userDB = await User.destroy({where: {id: id}});
        console.log(userDB);
    }catch(e){
        console.log(e.message);
    }
}

async function getAllusers(){
    const allUsers = await User.findAll();
    console.log(allUsers);
}

module.exports = {
    userCreate,
    createUsers,
    findUser,
    findUserByEmail,
    updateUser,
    deleteUser,
    getAllusers
}