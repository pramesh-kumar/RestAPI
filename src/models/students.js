const mongoose = require('mongoose');
const validator = require('validator');

const studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This Email is already present"], 
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    }
});

// we will create a new collection (student) using model

const Student = new mongoose.model("Student", studentschema);

module.exports = Student;