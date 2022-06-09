const Discord = require("discord.js");

module.exports = (discord, bot, member) => {
  const leaveChannel = member.guild.channels.cache.get("973646886223380480");
  var leaveEmbed = new Discord.MessageEmbed()
    .setTitle(":turtle: Member Leave :turtle:")
    .setColor("#d41532")
    .setThumbnail(
      "https://i.pinimg.com/originals/f2/ae/1d/f2ae1d6f2442be12eff7355eb2f1b0f0.jpg"
    )
    .setDescription(
      `Daar ga je **${member.displayName}**, weg uit Sksks! Turtlehater.`
    )
    .setFooter("https://saveturtles.org/")
    .setTimestamp();

  leaveChannel.send(leaveEmbed);
};
