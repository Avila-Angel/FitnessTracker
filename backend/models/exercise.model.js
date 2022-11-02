const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const exerciseSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true, // create fields for when it was created/modified
});

// next: add api endpoint routes so the server can be used to perform the crud operations - 
// create, read, update, delete (routes folder)

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

// schema - representation of a plan or theory in the form of an outline or model (think of it like a blueprint)