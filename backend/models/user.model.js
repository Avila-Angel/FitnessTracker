const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // trim whitespace at end
        minlength: 3 // at least three characters long
    },
}, {
    timestamps: true, // create fields for when it was created/modified
});

const User = mongoose.model('User', userSchema);

module.exports = User;