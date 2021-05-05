const Discord = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'warn', //el nombre del comando
    description: 'Warnear a alguien', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...

var perms = message.member.hasPermission('KICK_MEMBERS')
if(!perms) return message.channel.send('No tienes los permisos requeridos')

let persona = message.mentions.users.first()
if(!persona) return message.channel.send('Debes mencionar a alguien para warnear')

var razon = args.slice(1).join(" ")
if(!razon){
    razon = 'No especificado'
}

if(!warns.tiene(`${message.guild.id}.${persona.id}`))
warns.establecer(`${message.guild.id}.${persona.id}`, 0)

warns.sumar(`${message.guild.id}.${persona.id}`, 1)

const embed = new Discord.MessageEmbed()
.setTitle('WARN')
.addField(`**${message.author.tag}** ha warneado a:`, `**${persona.tag}**`)
.setDescription(`Por **${razon}**`)
.setColor('GREEN')
message.channel.send(embed)

persona.send(`Has recibido un warn en el servidor **${message.guild.name}** por **${razon}**`)

    }
};