const Discord = require('discord.js');

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`LuxelBot`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=506518880114704386&scope=bot&permissions=8) | [WebSite](Henüz Yok!)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`MeeTR - Ana Komutlar`, `:white_small_square: | **l!otorol-ayarla @rol #kanal**: Otorol Rol'ü Belirler!\n:white_small_square: | **l!hoşgeldin-ayarla** = Resimli Hoşgeldin Kanalı Ayarlar!\n| **l!sayaç-ayarla <sayı> #kanal**: Sunucuya Sayaç Kanalı Belirler!\n:white_small_square: | **l!log-ayarla #kanal**: Kullanıcılar için komutlar.\n:white_small_square: | **l!küfür aç/kapat**: Küfür Açar Veya Kapatır.\n:white_small_square: | **l!link-engel aç/kapat**: Link  Engel Açar Veya Kapatır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['anakomut', 'anakomutlar', 'anacommand',],
    permLevel: 0
  };
  
  exports.help = {
    name: 'anakomutlar',
    description: 'anakomutlar',
    usage: 'anakomutlar'
  };