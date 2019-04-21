const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** l!canlıdestek = Kendi Sunucumuzdan Sizin sunucunuzla Bağlantı Kurup yazılı Görüşüyoruz.\n**•** l!bağış = Bağış Yapmak İçin İninal Barkodumuz.')
  .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=506518880114704386&scope=bot&permissions=0)` + "**\n**"+`[DBL Oyver]()`+ "**\n**"+`[Destek Sunucusu]()`, false)    
  .setFooter('LuxelBot Destek');

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Tüm komutları gösterir.',
  usage: 'destek'
};