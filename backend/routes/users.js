const router = require('express').Router(); // for a route we are creating
let User = require('../models/user.model'); // require the mongoose model that we created 

router.route('/').get((req, res) => { // first endpoint, handles get requests
    User.find() // gets a list of all the users from mongoDB
        .then(users => res.json(users)) // get all users, return users from database in json format
        .catch(err => res.status(400).json('Error: ' + err)); // catches error and returns it
});

router.route('/add').post((req, res) => { // handles post requests
    const username = req.body.username; 

    const newUser = new User({username}); // new instance

    newUser.save() // new user saved to database
        .then(() => res.json('User added!')) // return message
        .catch(err => res.status(400).json('Error: ' + err)); // or return error
});

module.exports = router; // exports router