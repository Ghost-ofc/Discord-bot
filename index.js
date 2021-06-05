const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`El bot esta listo como: ${client.user.tag}!`);
    client.user.setStatus('online')

    console.log(client.user.presence.status)

});

client.on('message', message => {
    //Recibe el mensaje
    console.log(message.content);
    if (message.content === 'ping') {
        message.reply('pong')
    }

    if (message.content === 'Hola') {
        message.channel.send(`Hola ${message.author}`)
    }

    if (message.content === '!test') {
        message.channel.send(`Agradecido de que sea util para ti ${message.author}`)
    }
    
    if (message.content === '!am') {
        message.reply('Yooo, yo quiero ser tu amigo. El mejor que tengas.')
    }

    if (message.content === '!avatar') {
        message.reply(message.author.displayAvatarURL());
    }

    if (message.content === "!cup") {
        message.reply(`Este es el canal de telegram de mi amigo que enseña a crear tus propias cuentas gratis: https://t.me/XelalAprendo `)
    }
    

})

client.login('ODI2NDY5MzA1NzU5Njk0ODQ4.YGM7hQ.8wJfpwxM0FWj98kBZsN99edki50')
