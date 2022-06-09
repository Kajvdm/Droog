const discord = require("discord.js");
const weather = require("weather-js");
const postman = require("postman");
const request = require("postman-request");

module.exports.run = async (bot, message, args) => {
  var provincie = args.join(" ");
  var provs = [
    "antwerpen",
    "henegouwen",
    "limburg",
    "luik",
    "luxemburg",
    "namen",
    "noord-holland",
    "zuid-holland",
    "zeeland",
    "noord-brabant",
    "utrecht",
    "flevoland",
    "friesland",
    "groningen",
    "drenthe",
    "overijssel",
    "gelderland",
  ];
  var provincie_fetch = provincie.toLowerCase();
  if (!provs.includes(provincie_fetch)) {
    return message.reply(
      "Je moet een provincie uit Belgie of Nederland opgeven. (Oost-Vlaanderen en Vlaams-Brabant tellen natuurlijk niet)"
    );
  }

  if (!provincie) {
    return message.reply(
      "Je moet een provincie uit Belgie of Nederland opgeven."
    );
  }
  function weatherApi() {
    var apiCall =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      provincie +
      "&appid=3f84071aa8cff022288480ad88751b27&units=metric&lang=nl";
    request(apiCall, function (error, response, body) {
      var weatherData = JSON.parse(body);
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      var weatherEmbed = new discord.MessageEmbed()
        .setColor("YELLOW")
        .setImage(
          "https://media4.giphy.com/media/VCImBo2uUBqqQ/giphy.gif",
          true
        )
        .setTimestamp()
        .setFooter(weatherData.sys.country + " - " + weatherData.name)
        .setTitle("**Weerverslag " + capitalizeFirstLetter(provincie) + "**")
        .setDescription("Tijd om te zwemmen?")
        .addFields(
          {
            name: "Temperatuur",
            value: weatherData.main.temp + " °C",
            inline: true,
          },
          {
            name: "Gevoelstemperatuur",
            value: weatherData.main.feels_like + " °C",
            inline: true,
          },
          {
            name: "Minimale temperatuur",
            value: weatherData.main.temp_min + " °C",
            inline: true,
          },
          {
            name: "Maximale temperatuur",
            value: weatherData.main.temp_max + " °C",
            inline: true,
          },
          {
            name: "Luchtdruk",
            value: weatherData.main.pressure + " Pa",
            inline: true,
          },
          {
            name: "Vochtigheid",
            value: weatherData.main.humidity + "%",
            inline: true,
          }
        );

      message.channel.send(weatherEmbed);
    });
  }
  weatherApi();
};

module.exports.help = {
  name: "weer",
  description: "Displays weather.",
};
