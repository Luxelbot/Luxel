const Discord = require('discord.js');


exports.run = function(client, message) {
 msg.channel.bulkDelete(miktar).then(() => {
     msg.channel.send("`" + miktar + "` tane mesaj silindi!").then(msg => msg.delete(3000));
})

};

exports.conf = {
  enabled true, 
  guildOnly true, 
  aliases [],
  permLevel 2 
};

exports.help = {
  name 'temizle', 
  description 'Belirtilen miktarda mesaj siler.',
  usage 'temizle miktar'
};
