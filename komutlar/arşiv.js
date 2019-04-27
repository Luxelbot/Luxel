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
    .setImage(`https://cdn.boob.bot/Gifs/165C.gif,https://cdn.boob.bot/Gifs/19A0.gif`)
    return message.channel.send(sunucubilgi);
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
