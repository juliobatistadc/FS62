const User = require("../models/userModel");

async function userCreate(user){
    try{
        const newUser = await User.create(user);
        console.log(newUser);
    } catch(e){
        console.log(e.message);
    }
}

module.exports = userCreate