const Discord = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'warns', //el nombre del comando
    description: 'Warns de alguien', //la descripción (opcional)
    async execute(client, message, args) { //ejecutamos...

        var perms = message.member.hasPermission('KICK_MEMBERS')
        if(!perms) return message.channel.send('No tienes los permisos requeridos')

        let persona = message.mentions.members.first()
        if(!persona) return message.channel.send('Debes mencionar a alguien para warnear')

let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)
if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
message.channel.send('Esta persona es una de bien (0 warns)')

return;
    }

const embed = new Discord.MessageEmbed()
.setTitle(`Warns de **${persona}**`)
.addField(`${persona}`, `\`\`\`Tiene ${cantidad} warns\`\`\``)
.setColor('#00ffe9')

message.channel.send(embed)

    }
};