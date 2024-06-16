// Middleware file serves as a checker.
// It is mainly use for the verification of different actions.
// Not mostly authentication files are stored here

const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {

    // First,  you have to get the token from the client side
    const authenticationHeader = req.get('Authorization')

    if (!authenticationHeader) {
        const error = new Error('Authentication Header not found')
        error.statusCode = 401
        throw error;
    }
    const token = authenticationHeader.split(' ')[1]
    // define a variable that will store the decoded token
    let decodeToken
    try {
        // Verify the token and attach to the defined variable
        decodeToken = jwt.verify(token)


        
        
    } catch (err) {
        err.statusCode = 401
        throw err
        
        
    }
    if (!decodeToken){
        const error = new Error('Could not verify the token')
        error.statusCode = 401
        throw error
        
    }

    // get the user token so that you can export and use in other middlewares

    req.userId = decodeToken.userId
    next()
}