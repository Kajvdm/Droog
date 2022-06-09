const Discord = require("discord.js");

module.exports = (discord, bot, member) => {
  let welcomeRole = member.guild.roles.cache.find(
    (role) => role.id === "974803098675576842"
  );

  member.roles.add(welcomeRole);

  const welcomeChannel = member.guild.channels.cache.get("973646886223380480");
  var welcomeEmbed = new Discord.MessageEmbed()
    .setTitle(":partying_face: Nieuwe Member! :partying_face:")
    .setColor("#00000")
    .setThumbnail(
      "https://i.pinimg.com/originals/f2/ae/1d/f2ae1d6f2442be12eff7355eb2f1b0f0.jpg"
    )
    .setDescription(
      `Welkom **${member.displayName}**, in Sksks! \nWe hebben nu ${member.guild.memberCount} members!`
    )
    .setFooter("https://saveturtles.org/")
    .setTimestamp();

  welcomeChannel.send(welcomeEmbed);
};
