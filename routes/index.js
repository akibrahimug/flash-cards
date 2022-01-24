const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if(name){
        res.render('index', {name});
    }else{
        res.redirect('hello')
    }
})

router.get('/hello', (req, res) => {
    res.render('hello', {name: req.cookies.username})
})

router.post('/hello', (req,res) => {
    // Body of the response form the server
    const name = req.body.username;

    res.cookie('username', name);
    if(name){
        res.redirect('/');
    }else{
        res.redirect('hello')
    }
    
})

router.post('/goodbye', (req,res) => {
    res.clearCookie('username');
    res.redirect('/hello')
})

module.exports = router;