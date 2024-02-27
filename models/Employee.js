const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
    name: {type: String, require: true},
    midia: {type: String, require: true},
    training: {type: String, require: true},
    description: {type: String, require: true},
    social_media: {type: String, require: true},
    
})
    
module.exports = mongoose.model("Employee", EmployeeSchema);

