const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyari :warning:', '`unban` adli komutu özel mesajlarda kullanamazsin.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = guild.channels.find('name', '🔥│banlananlar');
  if (!modlog) return message.reply('`🔥│banlananlar` kanalini bulamiyorum.');
  if (reason.length < 1) return message.reply('Ban kaldirma sebebini yazmalisin.');
  if (!user) return message.reply('Bani kaldirilacak kisinin ID numarasini yazmalisin.').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban kaldirma')
    .addField('Kullanýcý:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Istediginiz kisinin banini kaldirir.',
  usage: 'unban [kullanci] [sebep]'
};
