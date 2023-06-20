const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Place = require("./places")