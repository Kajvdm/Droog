const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var poll = args.join(" ");

  if (!poll) return message.channel.send("Je hebt geen stelling opgegeven.");

  var pollEmbed = new discord.MessageEmbed()
    .setTitle("**Nieuwe poll**")
    .setColor("#00000")
    .setDescription(poll)
    .setFooter(`kusjes droog`)
    .setTimestamp();

  var pollChannel = message.guild.channels.cache.get(`973646950941470731`);
  if (!pollChannel)
    return message.guild.send("Pollchannel kon niet worden gefetched.");

  pollChannel.send(pollEmbed).then((embedMessage) => {
    embedMessage.react("👍");
    embedMessage.react("👎");
  });

  message.reply(`Je poll is succesvol verzonden! :white_check_mark:`);
};

module.exports.help = {
  name: "poll",
  description: "Geef een stelling.",
};
