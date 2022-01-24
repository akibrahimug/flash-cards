const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const cardsRoute = require('./routes/cards');
app.use(mainRoutes);
app.use('/cards', cardsRoute)

app.listen(3000, () => {
    console.log('The app is running at LocalHost:3000')
})

app.use((req, res, next) => {
    const err =new Error('Not Found');
    err.status = 404;
    next(err)
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status)
})