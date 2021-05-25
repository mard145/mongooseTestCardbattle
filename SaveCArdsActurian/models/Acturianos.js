const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    nameCard: {type:String, required:true},
    breedCard: {type:String, required:true},
    levelCard: {type:Number, required:true},
    EffectOrDescription: {type:String, required:true},
    attackPower: {type:Number, required:true},
    DefensePower: {type:Number, required:true}

})

module.exports = mongoose.model('Acturians', UserSchema)