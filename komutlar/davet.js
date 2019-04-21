const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": ""
			},
            title: "",
            description: "[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=506518880114704386&scope=bot&permissions=0) \n[Destek Sunucusu]()",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© LuxelBot © "
            }
          }
        });  
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
