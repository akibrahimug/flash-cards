const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cards', (req, res) => {
    res.render('card', {prompt: 'Who is buried in Grants tomb?', hint: 'Guess what'})
})

app.get('/hello', (req, res) => {
    res.render('hello')
})

app.post('/hello', (req,res) => {
    res.cookie('username', req.body.username)
    res.render('hello', {name:req.body.username})
})
app.listen(3000, () => {
    console.log('The app is running at LocalHost:3000')
})