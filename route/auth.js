const express = require('express');
const { body } = require('express-validator')

// Get the model to be validated
const User = require('../models/user')
const authController = require('../controllers/auth')

const router = express.Router();


router.put('/signup',
    // [
    // body('email')
    //     .isEmail()
    //     .withMessage('Please enter a valid email address')
    //     .custom((value, { req }) => {
    //         return User.findOne({ email: value })
    //             .then(userDoc => {
    //                 if (userDoc) {
    //                     return Promise.reject('Email address already exist')
    //                 }
    //             })
    //     }).normalizeEmail(),
    // body('password')
    //     .trim()
    //     .isLength({min:5}),
    // body('name')
    //     .trim()
    //     .not()
    //     .isEmpty()],
    authController.signup)


router.post('/login', authController.login)

module.exports = router;