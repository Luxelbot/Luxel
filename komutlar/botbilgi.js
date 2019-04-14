const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(client.user.username + " Bot Bilgi",client.user.avatarURL)
    .addField("Sunucu Sayısı", client.guilds.size)
    .addField("Discord JS Sürümü", "v"+Discord.version, true)
    .addField("Ping", client.ping + " MS",true)
    
    msg.channel.send(embed);
}

module.exports.help = {
    name: "botbilgi"
}

