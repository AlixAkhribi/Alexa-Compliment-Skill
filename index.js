import { handler } from "../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/alexa-sdk";

"use strict";

const Alexa = require("alexa-sdk");
const SKILL_NAME = "Confidence Builder";
const APP_ID = "";



// List of compliments //

const COMPLIMENT_LIST = [
    "You're the hero Gotham needs",
    "People enjoy you accidentally touching their butt while putting on you seat-belt",
    "People behind you at the movies think you're the perfect height",
    "Strangers all want to sit next to you on the bus",
    "Your roomate wants a lock of you hair but is afraid to ask",
    "Some people hope you start a band so that thye can start a cover of that band",
    "You could be an astronaut if you wanted, NASA told me so",
    "The kid you passed on the street today wants to grow up to be like you",
    "People at Trivia night are terrified of you",
    "You are the best in the world at thumb wars",
    "Every other country is jealous that you're a citizen in this country",
    "Your principal would call you to the office just to look cool",
    "You're not crazy. They are 100% into you",
    "Those shoes were a great call",
    "Your boss loved that thing you did at work today",
    "You are the most charming person in a 50 mile vincinity",
    "Your prom date still thinks about you all the time",
    "You've never had morning breath. I swear",
    "The FBI tapped your phone just to hear the sound of your voice",
    "Someone almost got a tattoo of your name once, but their mom talked them out of it",
    "You actually looked super graceful when you tripped in front of everyone",
    "I would totally trust you to dog-sit for a long weekend",
    "You want the best for everyone... except Gary",
    "Sushi chefs are wowed by your chopstick dexterity",
    "You could open that jar of mayonnaise using only three fingers",
    "8 out of 10 co-workers agree, your desk is one of the cleanest. Gary is one of those that didn't agree.",
];

// Setup // 

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();

}

// handlers are the intents we defined within our schema in aws // 

const handlers = {
    "LaunchRequest": () => {
        this.emit("GetCompliment")
    },

    "GetComplimentIntent": () => {
        this.emit("GetCompliment");
    },

    "GetCompliment": () => {
        const complimentIndex = Math.floor(Math.random() * COMPLIMENT_LIST.length);
        const randomCompliment = COMPLIMENT_LIST[complimentIndex];

        // Output //

        let speechOutput = "Your Compliment" + randomCompliment;

        this.emit(":tellWithCard", speechOutput, SKILL_NAME, randomCompliment);
    },

    "AMAZON.HelpIntent": () => {
        let speechOutput = "You say Give me a compliment, or, you can say exit... What can I help you with"
        let reprompt = "What can I help you with?"
        this.emit(":ask", speechOutput, reprompt);

    },

    "AMAZON.StopIntent": () => {
        this.emit(":tell", "Goodbye!")
    },

    "AMAZON.CancelIntent": () => {
        this.emit(":tell", "Goodbye!")
    }
};
