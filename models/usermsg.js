const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    email: {
        type: String,
        unique: true,
        valiate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }
})

const User = new mongoose.model('usermsg', userSchema);

module.exports = User
