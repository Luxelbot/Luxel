const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** l!ban @kullanıcı = Herhangi Bir Kullanıcıyı Banlarsınız.\n**•** l!kick = Herhangi Bir Kullanıcıyı Atarsınız.\n**•** l!unban @kullanıcı = Herhangi Bir Kullanıcının Banını Açarsınız.\n**•** l!otorol rol = İstediğiniz Rolü Girişte Verdirmesini Sağlayabilirsiniz.\n**•** l!sunucutanıt = Sunucunuzu Tanıtabilirsiniz.\n**•** l!rolbilgi ? İstediğiniz Rolün Bilgilerini Gösterir.\n**•** l!temizle = Herhangi Bir Miktarda Mesajları Siler.\n**•** l!ses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** l!yazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** l!slowmode = Sunucuda Yavaş Mod Açar.\n**•** l!ailemiz = Botun Sunucularını Gösterir.\n**•** l!sustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n**•** l!kanalıkilitle = İstediğiniz Kanalı Kilitler\n**•** l!kilitaç = İstediğiniz Kanalın Kilidini Açar.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=495214808484806657&scope=bot&permissions=2080767167)` + "**\n**"+`[DBL Oyver](https://www.discordbots-tr.xyz/)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/FYm8aba)`, false)
      .setFooter('LuxelBot Yetkili')

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
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};
