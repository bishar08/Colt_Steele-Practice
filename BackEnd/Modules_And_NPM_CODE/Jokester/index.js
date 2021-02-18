const jok= require("give-me-a-joke");
const colors = require("colors");

jok.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});