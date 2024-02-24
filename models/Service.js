const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ServiceSchema = new Schema({
    name_serv: {type: String, require: true},
    name_prof: {type: String, require: true},
    description: {type: String, require: true},
    value: {type: Number, require: true},
})
    
module.exports = mongoose.model("Service", ServiceSchema);