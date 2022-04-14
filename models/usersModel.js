const mongoose = require("mongoose");

const UsersModel = mongoose.model(
    "projetPerso",
    {
        id: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false
        },
        age: {
            type: Number,
            required: false
        },
        city: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        hobbie: {
            type: Array,
            required: false
        },
        lastName: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true
        }

    },
    "users"
);

module.exports = { UsersModel };