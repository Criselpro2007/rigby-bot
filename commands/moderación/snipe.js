const Discord = require('discord.js');
module.exports = { 
    name: 'snipe', 
    description: 'Comando snipe', 
    execute(client, message, args) { 
const channel = message.mentions.channels.first() || message.channel;

const msg = client.snipes.get(channel.id)
if(!msg){
    message.channel.send('No se ha borrado ningún mensaje')
}else {
    const embed = new Discord.MessageEmbed()

    .setTitle('Snipe')
    .setAuthor(`Mensaje escrito por: ${msg.delete.tag}`, msg.delete.displayAvatarURL())
    .addField('Canal', `<#${msg.canal.id}>`)
    .setDescription(msg.content)
    .setColor('RANDOM')

    message.channel.send(embed)
}
    }
};