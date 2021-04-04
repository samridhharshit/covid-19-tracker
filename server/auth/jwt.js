const jwt = require('jsonwebtoken');

const createAccessToken = async (email) => {
    return await jwt.sign({ data: email }, process.env.TOKEN_SECRET,  { expiresIn: '1h' })
}

module.exports = createAccessToken