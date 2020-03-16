const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },

        rffid: {
        type: String,
        trim: true,
    },

    ts: {
        type: String,
        trim: true,
    },
    dt: {
        type: String,
        trim: true,
    }
})
const Task = mongoose.model('Task', taskSchema)
module.exports = Task