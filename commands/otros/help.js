const Discord = require('discord.js')

module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'help', //el nombre del comando
    description: 'comando de ayuda', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...

const embed1 = new Discord.MessageEmbed()
    .setTitle('Comando Help')
    .setDescription('Si quieres ver los comandos presiona en sus reacciones | `DIVERSIÓN` :video_game: | `INTERACCIÓN` :smile: | `MODERACIÓN` :hammer: | `OTROS` :envelope: | **PÁGINA PRINCIPAL** :star2:')
    .setFooter('Comandos')
    .setColor('#00ffe9')

    const diversión = new Discord.MessageEmbed()
    .setTitle('Comandos de diversión')
    .setDescription('Aquí están mis comandos')
    .addField('r!ppt', 'Piedra, papel, tijera')
    .addField('r!pescar', 'Este comando te hace `pescar objetos virtuales`')
    .addField('r!dado', 'Es un dado virtual')
    .addField('r!8ball', 'Este comando te da unos resultados parecidos a una bola 8 :8ball:')
    .addField('r!tragamonedas', 'Este comando te da resultados parecidos a una máquina tragamonedas solo que sin el dinero')
    .setFooter('Rigby Bot')
    .setColor('#00ffe9')
    
    const interacción = new Discord.MessageEmbed()
    .setTitle('Comandos de Interacción')
    .setDescription('Aquí están mis comandos')
    .addField('r!golpe <usuario>', 'Usa este comando para `golpear` a alguien mencionándolo')
    .addField('r!bloqueo <usuario>', 'Con este comando bloqueas el golpe o golpe mortal de algún usuario')
    .addField('r!salto', 'Da un salto mortal para escapar o patear a alguien al caer')
    .addField('r!feliz', 'Esto te hace expresar felicidad con GIFS')
    .addField('r!triste', 'Te hace expresar tu tristeza con GIFS')
    .addField('r!enojado', 'Te hace expresar tu enojo con GIFS')
    .addField('r!sorprendido', 'Te hace expresar tu estado de sorpresa con GIFS')
    .addField('r!asustado', 'Te hace expresar tu miedo con GIFS')
    .addField('r!control <usuario>', 'Te hace controlar a algún usuario mediante la música')
    .addField('r!celebrar', 'Te da GIFS de celebración si es que ganaste algo o si solo quieres celebrar')
    .addField('r!bailar', 'Expresa tus pasos en la pista de baile')
    .setFooter('Rigby Bot')
    .setColor('#00ffe9')

    const moderación = new Discord.MessageEmbed()
    .setTitle('Comandos de Moderación')
    .setDescription('Aquí están mis comandos')
    .addField('r!ban <usuario>', 'Banea a algún usuario mencionándolo')
    .addField('r!kick <usuario>', 'Kickea a algún usuario mencionándolo')
    .setFooter('Rigby Bot')
    .setColor('#00ffe9')

    const otros = new Discord.MessageEmbed()
    .setTitle('Comandos (OTROS)')
    .setDescription('Aquí están mis comandos')
    .addField('r!server', 'Muestra info sobre el server en el que pongas el comando')
    .addField('r!say <mensaje>', 'Escribe un mensaje para que el bot lo diga por ti')
    .addField('r!redes', 'Te muestra las redes de mi querido creador')
    .setFooter('Rigby Bot')
    .setColor('#00ffe9')

    const principal = new Discord.MessageEmbed()
    .setTitle('Página principal')
        .setDescription('Aquí te muestro con lo máximo con lo que te puedo ayudar')
        .addField(':bust_in_silhouette: | Servidor de soporte', '[Click aquí para entrar](https://discord.gg/8Y7NJvV)')
        .addField(':envelope_with_arrow: | Invítame a tu server', '** [Link directo click aquí](https://discord.com/api/oauth2/authorize?client_id=760894235363901493&permissions=8&scope=bot) / [Disforge](https://disforge.com/bot/861-rigby-bot) / [Top.gg](https://top.gg/bot/760894235363901493) o escanea el QR**')
        .setImage('https://media.discordapp.net/attachments/763157626330152990/820129694879449118/qr-code.png?width=670&height=670')
        .setColor('#00ffe9')
        .setFooter('Rigby Bot')

    message.channel.send(embed1).then(msg => {

        msg.react('🎮')
        msg.react('😄')
        msg.react('🔨')
        msg.react('✉️')
        msg.react('🌟')

        msg.awaitReactions((reaction, user) => {
            if(message.author.id !== user.id) return;
            if(reaction.emoji.name === '🎮'){
                msg.edit(diversión)
            }
            if(reaction.emoji.name === '😄'){
                msg.edit(interacción)
            }
            if(reaction.emoji.name === '🔨'){
                msg.edit(moderación)
            }
            if(reaction.emoji.name === '✉️'){
                msg.edit(otros)
            }
            if(reaction.emoji.name === '🌟'){
                msg.edit(principal)
            }

        })
    })
    }
}