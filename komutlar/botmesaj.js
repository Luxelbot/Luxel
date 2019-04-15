if(!msg.author.id === "329710942260822017"){
    msg.channel.send("Bu komutu kullanmak için gerekli izine sahip değilsin!");
}else{
    const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {

    let mesaj = args.join(" ");
    if(mesaj == null) return msg.channel.send("Bir mesaj giriniz.");
    

    msg.guild.members.forEach(function(uyeler) {
        let embed = new Discord.RichEmbed()
        .setTitle("Luxel Özel Mesaj!")
        .setColor("RANDOM")
        .addField("Mesaj İçeriği", mesaj, true)
        .setFooter(client.user.username, client.user.avatarURL)
        .setTimestamp();
        uyeler.user.send(embed);
        
    });
}

module.exports.help = {
    name: "mesajyolla"
}
