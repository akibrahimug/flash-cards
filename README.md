# flash-cards
## App Intro

This is an app to help software developer students to study in a fun and interactive way. The app has cards that can be flipped to reveal either question or answer with hints 
to help when you get stack.

## Development

I used `Express.js` to create the server, `node_modules` have been ignored in this repo and the app dependencies can be found in the `package.json` file in the root directory
these include; 
- body-parser
- cookie-parser
- express
- pug


I made my code more modular by using the `express.Router()` method. Then I created two files in the `routes` folder `index.js` and `cards.js` 
I then required them in my main `app.js` file using `app.use`

I used `pug` for creating the templates for the app and the code can be found in the `views` folder. 
This folder has the following files 
- includes; This is a folder containing the `header.pug` file
  - header.pug; This file contains the header chunck of the app body
- app.pug; This file extends the `layout.pug` file and contains the `block main` content
- card.pug; This file extends the `app.pug` file which provides the `block card` section to be used here
- error.pug; This file handles the error rendering
- hello.pug; This file extends the `app.pug` file which provides the `block intro` section to be used here
- index.pug; This file extends the `app.pug` file which provides the `block intro` section to be used here
- layout.pug; This file contains the boiler plate for the app body

## How to use

Open the project in your prefered Text Editor.
I would suggest installing all the dependencies first then install `nodemon` to automatically restart the server.
I have provided a port Number `3000` where the app should run in the browser. `localHost:3000` as the root route.

## Call for improvment

If you want to help improve the UI, you are very welcome. One area i would suggest would be when the cards start to be displayed, the name section gets replaced by the 'student' default
setting, I think it shpuld keep displaying the current user's name.

## Thank you
