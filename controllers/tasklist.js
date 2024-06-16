// const bodyParser = require('body-parser');


// Getting completed task 
exports.getCompleteTask = (req, res, next) => {
    res.status(200).json({
        title: 'Building Rest API',
        content: {
            1: 'Use mongodb as database to store and retrieve data',
            2: 'Use postMan to test the apis',
            3: 'Create an api for an investment lab which involves login, invest, account and contacts',
            4: 'Upload the endpoint on github'
        },
        taskStatus:'Completed'
        

    })
}



// getting uncompleted task
exports.getUncompletedTask = (req, res, next) => {
    
    res.status(200).json({
        tasklist: [{
            title: 'Building 3D Frontend',
            content: {
                1: 'Build a 3D display of the blockchain platform to use the provided restAPI',
                2: 'Use threejs and react3 fibre to advanced 3D modells from blender',
                3: 'Get the UI prototype of the website using the link https://www.behance.com ',
                4: 'Deploy the fullstack to AWS Cloud'
            },

            taskStatus: 'Uncompleted'
        }]
    })
}


// Creating task

exports.createTask = (req, res, next) => {
    const title = req.body.title
    const content = req.body.content
    res.status(201).json({
        message: 'Post has been created successfully',
        tasklist: [{
            id:new Date().toISOString(),
            title: title,
            content: content,
            taskStatus: 'Uncompleted'
        }]
        
    })
}