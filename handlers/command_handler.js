const fs = require("fs");

module.exports = (bot, discord) => {
  fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter((f) => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
      console.log("Couldn't find commands.");
      return;
    }

    jsfile.forEach((f, i) => {
      let props = require(`../commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
      bot.aliases.set(props.help.name, props);
    });
  });
};
