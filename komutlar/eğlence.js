const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** l!tr = Ne Mutlu Türküm Diyene.\n**•** l!aşk @kullanıcı = Kullanıcı İle Aranızdaki Seviyeyi Gösterir.\n**•** l!trinity = GİF.\n**•** l!brilliance = GİF.\n**•** l!bravery = GİF.\n**•** l!korkut = sunucudan birini Korkutursunuz.\n**•** l!1vs1 @kullanıcı = Kullanıcı İle Eğlenceli 1VS1 atarsınız.\n**•** l!balıktut = Balık Tutarsınız.\n**•** l!espri = Espri Yaparsınız (Çok Soğuktur Dikkat).\n**•** l!söv = Bot İstediğiniz Kişiye Söver.\n**•** l!emojiyazı = yazdığınız yazıyı emojiye çevirir.\n**•** l!steamstore = Seçtiğiniz Oyun Hakkında Bilgi Verir.\n**•** l!slot = Slot Oyunu Oynar.\n**•** l!rastgeleuye = Rast Gele en az 2 üye seçer.\n**•** l!havadurumu = Seçtiğiniz Şehirin Hava Durumunu Gösterir. \n**•** l!pokemon = İstediğiniz Pokemon Karakterini Aratır.')
      .addField("» Linkler", `[Bot Davet Linki](Link: https://discordapp.com/oauth2/authorize?client_id=506518880114704386&scope=bot&permissions=0)` + "**\n**"+`[DBL Oyver]()`+ "**\n**"+`[Destek Sunucusu]()`, false)
      .setFooter('LuxelBot Eğlence')

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
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence '
};