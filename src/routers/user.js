const express = require('express')
const User = require('../models/user')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken')
//const RBA = require('../middleware/RBA')
const router = new express.Router()
var ObjectID = require('bson').ObjectID;

router.post('/users/create', async (req, res) => {

    const user = new User(req.body)  

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send("User created!")
    } catch (e) {
        res.status(400).send(e)
    }
})



router.post('/users/login', async (req, res) => {
    
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        //name=user.name
        //rffid=user.rffid
        //console.log(name,rffid)
        let date_ob = new Date()
        let ts=date_ob.getHours().toString().concat(":",date_ob.getMinutes().toString(),":",date_ob.getSeconds().toString())
        let dt=("0" + date_ob.getDate()).slice(-2).toString().concat("-",("0" + (date_ob.getMonth() + 1)).slice(-2).toString(),"-",date_ob.getFullYear().toString())
        var task = new Task({name:user.name, rffid:user.rffid,ts:ts,dt:dt})
        await task.save()
        const decoded = jwt.verify(token, 'thisismynewcourse')
        console.log(decoded)
         
        res.send({ user, token })
    

    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/tag/enter', async (req, res) => {
    
    try {
        const user = await User.findByRfid(req.body.rffid)
        let date_ob = new Date()
        let ts=date_ob.getHours().toString().concat(":",date_ob.getMinutes().toString(),":",date_ob.getSeconds().toString())
        let dt=("0" + date_ob.getDate()).slice(-2).toString().concat("-",("0" + (date_ob.getMonth() + 1)).slice(-2).toString(),"-",date_ob.getFullYear().toString())
        var task = new Task({name:user.name, rffid:user.rffid,ts:ts,dt:dt})
        await task.save()
 
         
        res.send({task})
    

    } catch (e) {
        res.status(400).send()
    }
})


router.post('/users/tag/leave', async (req, res) => {
    
    try {
        const user = await User.findByRfid(req.body.rffid)
        let date_ob = new Date()
        let ts=date_ob.getHours().toString().concat(":",date_ob.getMinutes().toString(),":",date_ob.getSeconds().toString())
        let dt=("0" + date_ob.getDate()).slice(-2).toString().concat("-",("0" + (date_ob.getMonth() + 1)).slice(-2).toString(),"-",date_ob.getFullYear().toString())
        var task = new Task({name:user.name, rffid:user.rffid,ts:ts,dt:dt})
        await task.save()
 
         
        res.send({task})
    

    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router