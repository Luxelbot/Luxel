const Discord = require('discord.js')


exports.run = async(client, message, args) => {
  
  
const emoji1 = message.client.emojis.get('ğŸ“');
const emoji2 = message.client.emojis.get('ğŸ“');
const emoji3 = message.client.emojis.get('ğŸ“');
const emoji4 = message.client.emojis.get('ğŸ“');
const emoji5 = message.client.emojis.get('ğŸ“');
const emoji6 = message.client.emojis.get('ğŸ“');
const emoji7 = message.client.emojis.get('ğŸ“');
      let isEnabled;
      message.reply("CanlÄ± Destek Komutunu KullandÄ±ÄŸÄ±nÄ±z Ä°Ã§in TeÅŸekkÃ¼rler. Birazdan Yetkili Ekibimiz sizinle ilgilenicektir.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "495668063379783690";
      const embed = new Discord.RichEmbed()
        .addField('UyarÄ±', `ğŸ“ CanlÄ± Destek Ã‡aÄŸrÄ±sÄ±`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek Ä°steyen**: ${message.author.tag} (${message.author.id}) \n**Destek MesajÄ±**: ${mesaj}`)
        .setFooter("CanlÄ± Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('ğŸ“ Destek'e bağlanmak için l!katil yaziniz. Iptal etmek için l!kapat yaziniz.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katildi') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('ğŸ“ Bağlantı zaman aşımına uğradı.')
      if (reason === 'aborted') {
        message.reply('Ã‡aÄŸrÄ± reddedildi.')
        client.channels.get(destekKanal).send('ğŸ“ reddedildi.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('ğŸ“ Destek Ekimibiz Açik!')
        client.channels.get(destekKanal).send('ğŸ“ Destek  kapatmak için `kapat` yaziniz.')
        chan.send(`${message.author}`)
        chan.send('Bir destek yetkili tarafından alındı!')
        chan.send('En Yakin Zamanda Size Yardımcı Olacagız.')
        chan.send('Destek kapatmak için `kapat` yazınız.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('ğŸ“ Başarılı şekilde kapatıldı.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('ğŸ“ Destek yetkili tarafından kapatıldı.')
              if (message.channel.id === destekKanal) chan.send('ğŸ“ Destek yetkili taraftan kapatÄ±ldÄ±.')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`ğŸ“ **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`ğŸ“ **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlı±destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};
