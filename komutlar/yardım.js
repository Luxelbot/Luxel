const Discord = require('discord.js');

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`MeeTR`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle]() | [DBL'de Oyver!](https://www.discordbots-tr.xyz/) | [WebSite]()\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`LuxelBot - Yardım`, `:white_small_square: | **l!anakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **/eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **/yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **/kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **/müzik**: Müzik ruhun gıdasıdır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
