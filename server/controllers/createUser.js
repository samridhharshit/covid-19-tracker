const generateNewToken = require('../auth/jwt')
const user = require('../database/models/users')

const createNewUser = async (userDetails) => {

    const userPresent = await user.find({ email: userDetails.email })

    if (userPresent[0]) {
        return {
            status: 409,
            message: 'email already registered! Use a different email.'
        }
    }
    const token = await generateNewToken(userDetails.email)

    const newUser = new user(userDetails)
    await newUser.save()

    return {
        status: 200,
        data: {
            token,
            user: await user.find({ email: userDetails.email })
        }
    }
}

module.exports = createNewUser