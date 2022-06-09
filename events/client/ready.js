module.exports = (discord, bot, message) => {
  console.log(`${bot.user.username} is up`);
  bot.user.setActivity(`turtles`, {type: "WATCHING"});
};
