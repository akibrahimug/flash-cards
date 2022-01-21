const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/cards', (req, res) => {
    res.render('card', {prompt: 'Who is buried in Grants tomb?', hint: 'Guess what'})
})

app.get('/sandbox', (req, res) => {
    res.render('sandbox', {colors: colors})
})

app.listen(3000, () => {
    console.log('The app is running at LocalHost:3000')
})