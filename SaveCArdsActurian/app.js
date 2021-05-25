const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const path = require('path')
const acturianRoutes = require('./routes/acturianRoutes')

mongoose.connect('mongodb://localhost/CardsActurian',{ useUnifiedTopology: true, useNewUrlParser: true })

let db = mongoose.connection

db.on('error', () => { console.log(error) })
db.once('open', () => { console.log('banco carregado') })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'public'))
app.use('/', acturianRoutes)

app.listen(port, () => {console.log(`Server running in port ${port}`)})


