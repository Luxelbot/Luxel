exports.run = async (bot, message, args) =>
{
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("Ayarlamam İçin Bir Rol Etiketlemelisin. \nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \nÖrnek Kullanım : /otorol @rol #kanal \nÖnemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)");
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("**Doğru Kullanım = l!otorol @<roladı> #<metinkanalı>**".then(msg => msg.delete(5000)));
      

	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}
	
	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
	
		console.log(err)

	}

	const embed = new Discord.RichEmbed()
		.setDescription(`<:evett:495950668725747733>  Otorol başarıyla ${args[0]} olarak ayarlandı! \n<:evett:495950668725747733>  Otorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol-ayarla',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}
