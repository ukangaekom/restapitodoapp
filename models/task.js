const mongoose = require('mongoose')
const User = require('../models/user')

const Schema = mongoose.Schema

const task = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required:true
    },

    steps: [
        {
            type: String,
            default: null
      }  
    ],

   
    status: {
        type: String,
        default:'uncompleted'
    }
    ,

    //  a creator property is defined in the model to link the model to the user
    // ref property is used to link the task to the user model so that it can be  tracked
    creator: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ]
    
}, {timestamp:true})




module.exports = mongoose.model('Task',task)