const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
 



// Importing routes
const authRoute = require('./route/auth')
const accountRoute = require('./route/account')
const tasklistRoute = require('./route/tasklist')
// const User = require('./models/user')





// Defining the app interface to work with express

const app = express()
app.use(bodyParser.json())

// During some CORS setting for the rest api
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

// Note, app.use(error) is a general error handler middleware in the application

// app.use('/',authRoute,tasklistRoute, accountRoute)

app.use('/acc',accountRoute)
app.use('/tasklist', tasklistRoute)
app.use('/',authRoute)




app.use((error,req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500
    const message = error.message 
    const data = error.data
    res.status(status).json({
        message: message,
        data: data
    })
})

// connecting to the mongodb database
mongoose.connect('mongodb://localhost:27017/taskDB',{ useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log('successfully connected! to database')
    app.listen(3000, () => {
    console.log('successfully connected')
})
}).catch(err => {
    
    console.log(`Opps, the connection resulted in ${err}`)
})

// User.updateOne({ email: "ekompract@gmail.com" }, { notification: true }).then(result => {
//     console.log("successfully updated")
// }).catch(err => {
//     console.log(err)
// })




