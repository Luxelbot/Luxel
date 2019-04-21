const Discord = require('discord.js')


exports.run = async(client, message, args) => {
  
  
const emoji1 = message.client.emojis.get('📞');
const emoji2 = message.client.emojis.get('📞');
const emoji3 = message.client.emojis.get('📞');
const emoji4 = message.client.emojis.get('📞');
const emoji5 = message.client.emojis.get('📞');
const emoji6 = message.client.emojis.get('📞');
const emoji7 = message.client.emojis.get('📞');
      let isEnabled;
      message.reply("Canlı Destek Komutunu Kullandığınız İçin Teşekkürler. Birazdan Yetkili Ekibimiz sizinle ilgilenicektir.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "495668063379783690";
      const embed = new Discord.RichEmbed()
        .addField('Uyarı', `📞 Canlı Destek Çağrısı`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("Canlı Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('📞 Destek'e ba�lanmak i�in l!katil yaziniz. Iptal etmek i�in l!kapat yaziniz.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katildi') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('📞 Ba�lant� zaman a��m�na u�rad�.')
      if (reason === 'aborted') {
        message.reply('Çağrı reddedildi.')
        client.channels.get(destekKanal).send('📞 reddedildi.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('📞 Destek Ekimibiz A�ik!')
        client.channels.get(destekKanal).send('📞 Destek  kapatmak i�in `kapat` yaziniz.')
        chan.send(`${message.author}`)
        chan.send('Bir destek yetkili taraf�ndan al�nd�!')
        chan.send('En Yakin Zamanda Size Yard�mc� Olacag�z.')
        chan.send('Destek kapatmak i�in `kapat` yaz�n�z.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('📞 Ba�ar�l� �ekilde kapat�ld�.')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('📞 Destek yetkili taraf�ndan kapat�ld�.')
              if (message.channel.id === destekKanal) chan.send('📞 Destek yetkili taraftan kapatıldı.')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`📞 **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`📞 **${message.author.tag}**: ${message.content}`)
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
  name: 'canl��destek',
  description: 'Canl� Destek Tablebi Olu�turur.',
  usage: 'canl�destek'
};
