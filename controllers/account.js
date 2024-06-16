const file = require('fs')
const path = require('path')
const middleware = require('../middlewares/is-auth')
const { validationResult } = require('express-validator')

// Import the schema models to user

const User = require('../models/user') 
const Task = require('../models/task' )                                                                                     
// Getting profile

exports.getProfile = (req, res, next) => {
    User.findOne({email:'ekompract@gmail.com'}).then(
        result => res.status(200).json(result )
    ).catch(err => {
        res.status(401).json(err)
    })
}


exports.setProfile = (req, res, next) => {
    
    User.updateOne({ email: 'ekompract@gmail.com' }, { bios: 'I am a software security engineer' }).then(
        result => {
            console.log('success')
            res.status(201).json(result)
        }
    ).catch(err => {
        console.log('error')
        res.status(401).json(err)
    })
}



exports.getSettings = (req, res, next) => {
    User.findOne({ email: 'ekompract@gmail.com' }).then(result => {
        res.status(201).json(result.notification)
    }).catch(err => {
        res.status(401).json(err)
    })
}


exports.setSettings = (req, res, next) => {
    User.findOne({ email: 'ekompract@gmail.com' }, { notification: false }).then(
        result => {
            res.status(201).json({status:'success'})
        }
    ).catch(err => {
        res.status(401).json({"status":"Error updating the database"})
    })
}