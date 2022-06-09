const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var infoEmbed = new discord.MessageEmbed()
    .setTitle("**Info Sksks**")
    .setColor("#1c1c1c")
    .setDescription("Description")
    .setTimestamp()
    .setFooter(`kusjes droog`);

  message.channel.send(infoEmbed);
};

module.exports.help = {
  name: "info",
  description: "Displays info embed.",
};
