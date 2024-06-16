const express = require('express')

const tasklistController = require('../controllers/tasklist')

// import authentication from the middleware file
const isAuth = require('../middlewares/is-auth')

const router = express.Router()


// router.get('/completedtask', isAuth,  tasklistController.getCompleteTask)
router.get('/completedtask', tasklistController.getCompleteTask)

// router.get('/uncompletedtask',isAuth,  tasklistController.getUncompletedTask)
router.get('/uncompletedtask', tasklistController.getUncompletedTask)

// router.post('/uncompletedtask', isAuth, tasklistController.createTask)
router.post('/uncompletedtask', tasklistController.createTask)


module.exports = router;