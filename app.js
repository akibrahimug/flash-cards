const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if(name){
        res.render('index', {name});
    }else{
        res.redirect('hello')
    }
})

app.get('/cards', (req, res) => {
    res.render('card', {prompt: 'Who is buried in Grants tomb?', hint: 'Guess what'})
})

app.get('/hello', (req, res) => {
    res.render('hello', {name: req.cookies.username})
})

app.post('/hello', (req,res) => {
    // Body of the response form the server
    const name = req.body.username;

    res.cookie('username', name);
    if(name){
        res.redirect('/');
    }else{
        res.redirect('hello')
    }
    
})

app.post('/goodbye', (req,res) => {
    res.clearCookie('username');
    res.redirect('/hello')
})

app.listen(3000, () => {
    console.log('The app is running at LocalHost:3000')
})