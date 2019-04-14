
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let guild = message.guild; //Guildi belirliyoruz
  let sebep = args.slice(1).join(' '); // Yazılan sebebi alıyoruz
  let user = message.mentions.users.first(); //Etiketlenen kullanıcıyı alıyoruz
  if (sebep.length < 1) return message.reply('Sebep girmelisin'); // Girilen sebep uzunluğu 1 harften azsa sebep girmelisin yazdırıyoruz 
  if (message.mentions.users.size < 1) return message.reply('Kimi sunucudan atacağını etiketlemelisin **Doğru Kullanım: l!kick [kullanıcı] [sebep] **.').catch(console.error); //Etiketlenen kişinin uzunluğu 1 harften azsa kimi sunucudan atacağını etiketlemesini istiyoruz

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.'); // Eğer kicklenebilir değilse mesaj attırıyoruz
  message.guild.member(user).kick();//Her şey düzgünse kickledik
  return message.channel.send(`Başarıyla ${user.username}#${user.discriminator} isimli kişi ${message.author.username}#${message.author.discriminator} tarafından atıldı. **SEBEP**: ${sebep}  `); // Kick mesajımı attırıyoruz
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2,
};

exports.help = {
  komut: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'l!kick [kullanıcı] [sebep]'
};
 
