const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json");
const kReplacements = ["belgie", "justin", "chemo", "twan is 1.69"];
const fReplacements = [
  "Je bent zelf zwart!",
  "Je hebt geluk dat je achter je monitor zit!",
  "Je hebt kanker",
  "Ga je vader zoeken",
  "Zwerver",
];

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot, Discord);
});

bot.on("message", (message) => {
  if (
    config.FILTER_LIST.some((word) =>
      message.content.toLowerCase().includes(word)
    )
  ) {
    message.delete();
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    var repNum = Math.round(getRandomInt(7));
    message.channel.send(kReplacements[repNum]);
  }

  if (
    config.FILTER_FYSIOSKI.some((word) =>
      message.content.toLowerCase().includes(word)
    )
  ) {
    message.delete();
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    var repNum = Math.round(getRandomInt(7));
    message.channel.send(fReplacements[repNum]);
  }
});

bot.login(process.env.token);
