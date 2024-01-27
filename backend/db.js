const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Paytm");

const user = new mongoose.Schema({
    firstName : String,
    lastName : String,
    username : String,
    password : String
})

const User = new mongoose.model("User",user);

module.exports = { User }