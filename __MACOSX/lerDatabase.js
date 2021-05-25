const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const UserSchema = new mongoose.Schema({

    nameCard: String,
    breedCard: String,
    levelCard: Number,
    EffectOrDescription: String,
    AttackPower: Number,
    DefensePower: Number

})

const ActurianModel = mongoose.model('Acturians', UserSchema)



mongoose.connect('mongodb://localhost/CardsActurian',{ useUnifiedTopology: true, useNewUrlParser: true })

let db = mongoose.connection
db.on('error', ()=>{ console.log(error)})
db.once('open', ()=>{ console.log(db)})

    
