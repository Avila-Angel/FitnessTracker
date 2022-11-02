const router = require('express').Router(); // for a route we are creating
let Exercise = require('../models/exercise.model'); // require the mongoose model that we created 

router.route('/').get((req, res) => { // first endpoint, handles get requests
    Exercise.find() // gets a list of all the exercises from mongoDB
        .then(exercises => res.json(exercises)) // get all exercises, return exercises from database in json format
        .catch(err => res.status(400).json('Error: ' + err)); // catches error and returns it
});

router.route('/add').post((req, res) => { // handles post requests
    const username = req.body.username; 
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({ // new instance
        username,
        description,
        duration,
        date,
    });

    newExercise.save() // new exercise saved to database
        .then(() => res.json('Exercise added!')) // return message
        .catch(err => res.status(400).json('Error: ' + err)); // or return error
});

router.route('/:id').get((req, res) => { // :id object id created automatically by mongodb, returns info for that exercise
    Exercise.findById(req.params.id) // gets id from url
        .then(exercise => res.json(exercise)) // returns json
        .catch(err => res.status(400).json('Error: ' + err)); // returns error
});

router.route('/:id').delete((req, res) => { // delete request
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => { // update request
    Exercise.findById(req.params.id) // finds current exercise
        .then(exercise => { // updates exercise
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);
            
            exercise.save() // save
                .then(() => res.json('Exercise updated!')) // returns string
                .catch(err => res.status(400).json('Error: ' + err)); // returns error
        })
        .catch(err => res.status(400).json('Error: ' + err));
    });

module.exports = router; // exports router