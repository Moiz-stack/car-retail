const express = require('express')
const mongoose = require('mongoose')
const app = express()
const carRouter = require('./routes/carRouter')
const carModel = require('./models/carModel')
app.use(express.json())

const port = 3000

mongoose.connect('mongodb://localhost:27017/Cars')

app.use('/car', carRouter)


app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" })
})


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})