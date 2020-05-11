const express = require('express')
const router = express.Router()

const Register = require('../../models/register')

const SendEmail = require('./../../controller/senEmail')

// Get all registers
router.get('/', async (req, res) => {
    try {
        const register = await Register.find()
        res.json(register)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one register
router.get('/:id', getRegisters, (req, res) => {
    res.json(res.register)
})

// Create one register
router.post('/', async(req, res) => {
    const register = new Register({
        email : req.body.email,
        name : req.body.name,
        birthDate : req.body.birthDate,
        intoInCompany : req.body.intoInCompany,
        gender : req.body.gender,
        jobRole : req.body.jobRole,
        departament : req.body.departament,
        manager : req.body.manager
    })

    try {
        const newRegister = await register.save()

        SendEmail(req.body.email, req.body.name);

        res.status(201).json(newRegister)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Update one register
router.patch('/:id', getRegisters , async (req, res) => {
    if (req.body.name != null) {
        res.register.name = req.body.name
    }

    if (req.body.email != null) {
        res.register.email = req.body.email
    }

    try {
        const updateRegister = await res.register.save()
        res.json(updateRegister)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Delete one register
router.delete('/:id', getRegisters, async (req, res) => {
    try {
        await res.register.remove()
        res.json({message: 'Deleted this Register'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


async function getRegisters(req, res, next) {
    try {
      register = await Register.findById(req.params.id)
      if (register == null) {
        return res.status(404).json({ message: 'Cant find subscriber'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.register = register
    next()
  }

module.exports = router