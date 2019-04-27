const Discord = require('discord.js');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Luxel Arşiv')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Nasıl Beğendin mi?')
    .setColor('RANDOM')
    .setTimestamp()
		.setImage(`https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJv6_Ht_DhAhWDDuwKHfMQDkwQjRx6BAgBEAU&url=http%3A%2F%2Fporno18.blog.br%2Fvideos-xxx%2Fgifs-porno-melhores-gifs-de-sexo-para-whatsap%2F&psig=AOvVaw0-ElZajJIodXE17QqLmRdL&ust=1556460017837408`)
		var arsiv = ['Luxelll Arşiv'];
      var luxel = arsiv[Math.floor(Math.random() * arsiv.length)];
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'arsiv',
  description: 'Luxel Bot Arşivini Gösterir.',
  usage: 'arsiv'
};
