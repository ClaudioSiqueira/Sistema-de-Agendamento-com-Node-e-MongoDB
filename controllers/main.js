const express = require('express')
const Appointment = require('../models/Appointment')
const router = express.Router()

router.post('/create', async (req, res) =>{
    try{
        req.body.finished = false
        const data = await Appointment.create(req.body)
        return res.send(data)
    }catch(err){
        return res.status(400).send(err)

    }
})

router.get('/appointments', async(req, res) =>{
    try{
        let data = await Appointment.find()
        console.log(data)
        return res.send(data)
    }catch(err){
        return res.status(400).send(err)
    }

})

router.delete('/delete/:id', async (req, res) =>{
    try{
        let id = req.params.id
        const data = await Appointment.deleteOne({id:id})
        return res.send(data)
    }catch(err){
        return res.status(400).send(err)

    }
})

module.exports = app => app.use('/', router)