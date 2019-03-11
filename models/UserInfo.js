const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

// Create Schema
const UserInfoSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    middleName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    dataOfBirth: {
        type: String,
        required: false
    },
    employment: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
    },
    bidSize: {
        type: String,
        required: false
    },
    subsection: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    academicStatus: {
        type: String,
        required: false
    },
    degree: {
        type: String,
        required: false
    }
});

//add pagination plugin for UserInfoSchema
UserInfoSchema.plugin(mongoosePaginate);

module.exports = UserInfo = mongoose.model("usersInfo", UserInfoSchema);
