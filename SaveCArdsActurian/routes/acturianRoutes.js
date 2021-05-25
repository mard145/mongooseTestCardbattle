const express = require('express')
const router = express.Router()
const methodOverride = require('method-override')
router.use(methodOverride('_method'))

const controller = require('../controllers/controller')

router.get('/all', controller.allAliens)
router.get('/', (req,res)=>{res.render('index')})
router.get('/index', (req, res)=>{res.render('index')})
router.get('/addCard',(req,res)=>res.render('addCard',{error:false, body:{}}))
router.get('/edit', (req,res) =>{res.render('edit')})
router.get('/edit/:id', controller.loadCard)
router.get('/cartaAdd', (req,res)=>{res.render('cartaAdd')})
router.get('/:attackPower', controller.redirectattackPowerValue)
router.post('/', express.urlencoded({extended:true}), controller.addcard)
router.post('edit/:id', express.urlencoded({extended:true}), controller.editedCard)
router.delete('/:id', controller.deleteCard)
router.delete('/', express.json(), controller.deleteCard)


module.exports = router