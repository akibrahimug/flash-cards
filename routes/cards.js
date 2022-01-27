const express = require('express');
const router = express.Router();
const {data} = require('../data/flashcarddata.json');
const {cards} = data;

router.get('/', (req,res) => {
    const randomNum = Math.floor(Math.random()*cards.length);
    res.redirect(`/cards/${randomNum}?side=question`)
})

router.get('/:id', (req, res) => {
    const {side} = req.query;
    const {id} = req.params;
    if(!side){
        return res.redirect(`/cards/${id}?side=question`)
    }
    const text = cards[id][side];
    const {hint} = cards[id];

    const templateData = {id, text, side, hint};
    if(side === 'question'){
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.linkText = 'Answer'
    }else if(side === 'answer'){
        templateData.sideToShow =  'question';
        templateData.linkText = 'Question'
       
    }
    res.render('card', templateData)
})


module.exports = router;