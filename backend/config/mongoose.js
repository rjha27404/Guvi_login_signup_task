const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//database connection

const mongo = process.env.MONGO_URL;
mongoose.connect(mongo);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//defining Schema
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})
const User = new mongoose.model("User", userSchema);
module.exports = User;
