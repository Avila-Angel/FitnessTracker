const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // helps connect to MongoDB

require('dotenv').config(); // configures so we can have our environment variables in our dotenv file

// allows us to create our express server 
const app = express();
const port = process.env.PORT || 5001;

// middleware 
app.use(cors());
app.use(express.json()); // allows us to parse json 

const uri = process.env.ATLAS_URI; // database URI, get from MongoDB
mongoose.connect(uri); // deals with MongoDB updates and start connections
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// require files and import 
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// uses files
app.use('/exercises', exercisesRouter); // load everything in exercisesRouter
app.use('/users', userRouter); // load everything in userRouter

// starts server, listens on a certain port 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});