const Discord = require("discord.js");
  
module.exports.run = async (client, msg, args) => {

let messagecount = parseInt(numberofmessages);
message.channel.fetchMessages({ limit: messagecount })
.then(messages => message.channel.bulkDelete(messages));

}

module.exports.help = {
    name: "temizle"
}
