const config = require("../../config.json");
const kReplacements = [
  "sterre",
  "sterre",
  "sterre",
  "belgie",
  "justin",
  "chemo",
  "twan is 1.69",
];

module.exports = (discord, bot, message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.PREFIX;

  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if (commandfile) commandfile.run(bot, message, args);
};
