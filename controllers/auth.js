const User = require('../models/user')
const {validationResult} = require('express-validator')

const bycrpt = require('bcrypt');
// json webtoken will be used to process the login
const jwt = require('jsonwebtoken')

exports.signup = (req, res, next) => {

    // Start by validating error because it is a signup function
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     const error = new Error('Sign up validation failed.')
    //     error.status = 442
    //     error.data = errors.array()
    //     throw error;
    console.log(req)
    // }
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    // Becaue you are storing this operation in the data base, you will encrypt it. Let's use bycrpt
    // bycrpt.hash(password, 9)
    //     .then(hashedPassword => {
    //         const user = new User({
    //             email: email,
    //             password: hashedPassword,
    //             name: name
    //         })

     User({
        email: req.body.email,
        password: req.body.password,
         name: req.body.name,
        
     }).save()
        .then(result => {
            res.status(201).json({
                message: `user ${result.name} is created successfully`,
                Userid: result._id
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err);
        })
    

}



exports.login = (req, res, next) => {
    // validating request is not necessary as you will still check the database so safe performance
    // const errors = validationResult(req)

    // if (!errors.isEmpty()) {
    //     const error = new Error('Login validation failed')
    //     error.status = 443
    //     error.data = errors.array()
    //     throw error;
    // }
    const email = req.body.email
    const password = req.body.password
    // Define a loaded user to check the returned user in the returned thenables
    // Not use let so that you can update the variable
    let loadedUser

    // find if that email exist first
    User.findOne({ email: email })
        .then(user => {
            // Sometimes a user can be returned as undefined without error. So we will check
            
            if (!user) {
                const error = new Error('The user is undefined')
                error.statusCode = 401
                throw error
            }

    


            loadedUser = user

            // Use bycrpt to compare and return the outcome before chaining another thenable
            // return bycrpt.compare(password, user.user.password)
            if (password == user.password) {
                return true;
            }

        })
        .then(isEqual => {

            // Check if it is equal to the password before proceeding to generate the webToken for login
            if (!isEqual) {
                const error = new Error('Wrong password try again')
                error.statusCode = 401
                throw error
            }

            const token = jwt.sign({
                email: loadedUser.email,
                identity: loadedUser._id.toString()
            }, 'TheExpirableSecretKey', { expiresIn: '24h' })
            

            res.status(200).json({
                token: token,
                user_id: loadedUser._id.toString()
            })




            
        }

    )
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500

            }

            next(err)
        })

    
}