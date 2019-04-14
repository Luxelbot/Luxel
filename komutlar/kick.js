client.on("message", (message) => {
    if (message.content.startsWith("l!at")) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " Başarılı Şekilde Atıldı! :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Yetkiniz Yok!");
        });
    }
});
