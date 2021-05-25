const Acturianos = require('../models/Acturianos')

 const redirectattackPowerValue = async (req, res) =>{
        
    let attackPower = req.params.attackPower

  try  {
           let doc = await Acturianos.find({attackPower})
            res.send(doc)
         }

   catch(error)
       {
         res.send(error)
         console.log(error)
         }
                                                   }

const addcard = async(req,res)=>{

    let OtherCard = new Acturianos(req.body)
            
    try  {   
          let doc = await OtherCard.save()   
          res.redirect('/cartaAdd')
          console.log('carta adicionada')         
         }
    catch(error)
         {
          res.render('addCard',{error, body:req.body})
          console.log(error)
         }

                                }
const allAliens = async (req, res)=>{
    try  {   
        let docs = await Acturianos.find({})   
        res.render('all', {Acturianos: docs})
        console.log('Todas as cartas foram encontradas')         
       }
  catch(error)
       {
        res.send(error)
        console.log(error)
       }
                                    }

// const deleteCard = async(req, res)=>{
//     let id = req.params.id
//     try  {   
//     await Acturianos.findByIdAndDelete(id)
//     res.send(id)         
//        }
//   catch(error)
//        {
//         res.send(error)
//         console.log(error)
//        }

// }

const deleteCard = async(req, res)=>{

     let id = req.params.id;
    if(!id){
       id = req.body.id;
    }
    try  {   
           await Acturianos.findByIdAndDelete(id)
           //res.send(id)
           res.redirect('/all')     
       }
  catch(error)
       {
        res.status(404).send(error)
        console.log(error)
       }

}

const loadCard = async(req, res)=>{

     let id = req.params.id;
   

    try  {   
        let doc = await Acturianos.findById(id)
           res.render('edit', {error:false, Acturianos:doc})    
       }
  catch(error)
       {
        res.status(404).send(error)
        console.log(error)
       }

}

const editedCard =  async(req,res)=>{

     let id = req.params.id;
     if(!id){
        id = req.body.id;
            }
          let card = {}

          card.nameCard = req.body.nameCard
          card.breedCard = req.body.breedCard
          card.levelCard = req.body.levelCard
          card.EffectOrDescription = req.body.EffectOrDescription
          card.attackPower = req.body.attackPower
          card.DefensePower = req.body.DefensePower

          try  {   
                let doc = await Acturianos.findByIdAndUpdate(id)   
                res.redirect('/cartaAdd')
                console.log('carta adicionada')         
               }
          catch(error)
               {
                res.render('edit',{error, body:req.body})
                console.log(error)
               }

}





module.exports = { addcard, redirectattackPowerValue, allAliens, deleteCard,loadCard, editedCard }