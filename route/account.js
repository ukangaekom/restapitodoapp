const express = require('express')

const accountController = require('../controllers/account')

// import authentication from the middleware file
const isAuth = require('../middlewares/is-auth')

const router = express.Router();


// Get routes
// router.get('/profile', isAuth, accountController.getProfile)
router.get('/profile', accountController.getProfile)

router.get('/settings', accountController.getSettings)


// Post routes

// router.post('/profile', isAuth, accountController.setProfile)
router.post('/profile', accountController.setProfile)
// router.post('/settings', isAuth, accountController.setSettings)
router.post('/settings', accountController.setSettings)







module.exports = router;


