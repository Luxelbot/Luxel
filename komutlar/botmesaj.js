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

member.roles.has('<@567370793013608449>');
// returns true if the member has the role

member.roles.some(role => role.name === '(¯`•._.•[ Moderator ]•._.•´¯)');
// returns true if any of the member's roles is exactly named "Mod"

module.exports.help = {
    name: "mesajyolla"
}
