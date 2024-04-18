const userController = require('../controllers/users.controller')
const router = require('express').Router()

router.get('/', (req, res)=>{
    return res.render('index', {title:null})
})

router.use('/users', require('./users.router'))

router.get('/create-user', (req, res)=>{
    return res.render('users/create', {title: "Create"})
})
router.post('/create-user', userController.createUser)

router.get('/about-us', (req, res)=>{
    return res.render('about-us', {title: "About Us"})
})

module.exports = router