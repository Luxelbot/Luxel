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

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
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

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('549584988232876062').send("Welcome"); 
});

client.login(process.env.TOKEN);
