const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = schema({
    name: String,
    email: String,
    password: String
})

const user = mongoose.model("users", userSchema)

module.exports = user