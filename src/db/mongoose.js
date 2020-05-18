const mongoose = require('mongoose')

mongoose.connect('mongodb://192.168.2.110:27017/attandance-system-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})