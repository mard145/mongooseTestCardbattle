const express = require('express')
const app = express()
const router = express.Router()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')

const cardSchema = new mongoose.Schema({
    nameCard: String,
    levelCard: Number,
    imageCard: String,
    descOrEffectCard: String,
    attackCard: Number,
    defenseCard:Number
})



mongoose.connect('mongodb://localhost/CardsActurian', { useUnifiedTopology: true, useNewUrlParser: true })

let db = mongoose.connection

db.on('error', ()=>{
    console.log(error)
})
db.once('open', ()=>{
    console.log(db)
})

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
   // res.set('Content-Type', 'text/html') // Tbm posso configurar pra mostrar status de erro 404 por exemplo
    res.type('html')
    res.send('hello Aurora From Get')
    console.log('Hello World From GET')
})

app.post('/', (req, res)=>{
    res.send('Hello  Aurora From Post')
})

app.listen(port, ()=>{
    console.log(`Server running in port ${port}`)
})

