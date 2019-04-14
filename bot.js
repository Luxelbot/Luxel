const Discord = require("discord.js");
const client = new Discord.Client();
const ayar = require("./ayar.json");
const fs = require("fs");
client.commands = new Discord.Collection();

    fs.readdir("./komutlar/", (err, files) => {

        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0){
            return console.log("Komut Bulunamadı!");
        }

        jsfile.forEach((f, i) => {
            let props = require(`./komutlar/${f}`);
            console.log(`[${i + 1}] - ${f} Yüklendi!`);
            client.commands.set(props.help.name, props);
        });
    });

client.on("guildMemberAdd" ,member => {
    let kanal = member.guild.channels.find(ch => ch.name === "🚧╟≿𝙶elen-𝙶iden");
    if(!kanal) return console.log("Gelen Adında Kanal Bulunamadı!"); // kanal yok ise
    
    let rol = member.guild.roles.find(rol => rol.name === ">>>| --- Üye --- |<<<");
    if(!rol) return console.log("üye adlı rol bulunamadı!");
    
    member.addRole(rol).catch(console.error);
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Hoşgeldin " + member.user.username, client.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .addField("Sunucu Sayısı", member.guild.members.size, true)
    .addField("Verilen Rol", rol.name, true);
    
    kanal.send(embed);
});

client.on("guildMemberRemove" ,member => {
    let kanal = member.guild.channels.find(ch => ch.name === "🚧╟≿𝙶elen-𝙶iden"); // kanal arama
    if(!kanal) return console.log("Giden Adında Kanal Bulunamadı!"); // kanal yok ise
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Hoşgeldin " + member.user.username, client.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .addField("Sunucu Sayısı", member.guild.members.size, true)
    
    kanal.send(embed);
});

client.on("ready", () => { // 
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    if (message.content.startsWith("l!kick")) {
        var member = message.mentions.members.first();
        member.kick()
        .then(() => {
            message.channel.send("wave " + member.displayName + " Başarılı Şekilde Atılmıştır! :point_right: ");
        }).catch(() => {
            message.channel.send("Yetkiniz Yok! ");
        });
    }
});

  
let prefix = ayar.prefix;

client.on("message", msg => {
  
    let prefix = ayar.prefix;
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,msg,args);

});

client.login(process.env.TOKEN);
