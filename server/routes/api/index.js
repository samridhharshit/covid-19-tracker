const express = require('express');
const router = express.Router();

const createUser = require('../../controllers/createUser')
const getCovidData = require('../../controllers/getCovidData')
const authMiddleware = require('../../auth/authMiddleware')
const userLogin = require('../../controllers/userLogin')

router.post('/user/createNewUser', async (req, res) => { res.send(await createUser(req.body)) })
router.post('/user/login', async (req, res) => { res.send(await userLogin(req.body)) })
router.get('/getCovidData', authMiddleware, async (req, res) => { res.send(await getCovidData()) })

module.exports = router