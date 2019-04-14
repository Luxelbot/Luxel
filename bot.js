const Discord = require("discord.js");
const client = new Discord.Client();
const ayar = require("./ayar.json");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
  
let prefix = ayar.prefix;

client.on("message", msg => {

    if (msg.content == prefix + "ping"){
        msg.reply(client.ping);
    }

});

client.login(process.env.TOKEN);
