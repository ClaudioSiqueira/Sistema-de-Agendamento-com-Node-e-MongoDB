const mongoose = require('../database/connection')

const appointmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },

    description:{
        type:String,
        required: true
    },

    cpf:{
        type:String,
        required: true
    },
    
    date:{
        type:Date,
        required: true
    },

    time:{
        type:String,
        required: true
    },

    /*finished:{
        type: Boolean,
        required:true
    }*/
    
})

const Appointment = mongoose.model('agendamento', appointmentSchema)

module.exports = Appointment