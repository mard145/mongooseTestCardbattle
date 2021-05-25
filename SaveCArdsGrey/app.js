const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')

const UserSchema = new mongoose.Schema({

    nameCard: {type:String, required:true},
    breedCard: {type:String, required:true},
    levelCard: {type:Number, required:true},
    EffectOrDescription: {type:String, required:true},
    attackpower: {type:Number, required:true},
    DefensePower: {type:Number, required:true}

})

const ActurianModel = mongoose.model('Acturians', UserSchema)



mongoose.connect('mongodb://localhost/CardsActurian',{ useUnifiedTopology: true, useNewUrlParser: true })

let db = mongoose.connection
db.on('error', ()=>{ console.log(error)})
db.once('open', ()=>{ console.log('banco carregado')})


    app.use('/', express.static(path.join(__dirname, 'public')))

    app.post('/',express.urlencoded({extended:true}), async(req,res)=>{
        let OtherCard = new ActurianModel(req.body)

        try{   
                doc = await OtherCard.save() 
                
                res.redirect('/')
                console.log('carta adicionada') 
                
        }catch{
              res.redirect("/error.html")
        }
        
        })
      
    
    app.listen(port, ()=>{
        console.log(`Server running in port ${port}`)
    })


