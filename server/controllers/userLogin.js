const generateNewToken = require('../auth/jwt')
const user = require('../database/models/users')

const userLogin = async (userDetails) => {
    const userPresent = await user.find({ email: userDetails.email })

    if (!userPresent[0]) {
        return {
            status: 404,
            message: 'no user registered by this email. If not registered, Kindly register with us first. Thank you'
        }
    } else {
        if (userPresent[0].password !== userDetails.password) {
            return {
                status: 401,
                message: 'password incorrect!'
            }
        } else {
            const token = await generateNewToken(userPresent[0].email)

            return {
                status: 200,
                data: {
                    token,
                    user: userPresent[0]
                }
            }
        }
    }
}

module.exports = userLogin