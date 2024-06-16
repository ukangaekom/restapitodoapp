// require mongoose and use mongoose schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema


// define the schema for the type of information you want to get e.g user

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    bios: {
        type: String,
        default: 'I am my bio'
    },
    ratings: {
        type: Number,
        default: 0
    },
    notification: {
        type: Boolean,
        default: false
    },
    Task: 
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'Task'
            }
        ]
    

})


// export the mongoose

// Note the 'user' is what will be the name of the collection in the database
// collection is the same thing as saying table

module.exports = mongoose.model('User', userSchema)