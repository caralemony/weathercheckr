# weathercheckr

## A simple app to show you clothing suggestions based on the current weather.

For this project, I decided to work on the following user story;

> The service automatically discovers the user's location and gives a recommendation based on the weather at that location.

The technologies that I used for this are Node, Express and the Darksky Weather API.

To view the deployed app you can visit `https://weathercheckr.herokuapp.com/`

### Installation Instuctions

To run this project locally please follow the below instructions;

In your terminal please run

`git clone https://github.com/caralemony/weathercheckr.git`

`npm i`

You will then need to create a file in the root called `config.env` and then add `export DARK_SKY_KEY = [mySecretKey!]` to it.

Next in the terminal run `npm start` then navigate to `http://localhost:3000/` in the browser.

To run tests run `npm test`

### Stretch Goals

If I were able to spend some more time on this project, I would like to create test doubles so that I can fully test the app for different locations and weather conditions.

I would also like to add images for clothing suggestions.

Finally, I would add aria labels to all elements and alt text for the images so that the app is more accesible.
