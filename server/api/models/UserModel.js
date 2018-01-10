const mongoose =  require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
    username: String,
    password: String
})

const UserModel = mongoose.model('UserModel', modelSchema)

module.exports = UserModel