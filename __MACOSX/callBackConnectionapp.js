const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

mongoose.connect('mongodb://localhost/CardsActurian', (error, db)=>{
console.log(error)
console.log(db)
})

app.get('/', (req,res) =>{

res.render( bodyParser.urlencoded('index.html'))

})

app.listen(port, ()=>{
    console.log(`Server running in port ${port}`)
})