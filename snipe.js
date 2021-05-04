const Discord = require('discord.js');
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'snipe', //el nombre del comando
    description: 'Comando snipe', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...
const channel = message.mentions.channel.first() || message.channel;

const msg = client.snipes.get(channel.id)
if(!msg){
    message.channel.send('No se ha borrado ningún mensaje')
}else {
    const embed = new Discord.MessageEmbed()

    .setTitle('Snipe')
    .setAuthor(`Mensaje escrito por: ${msg.delete.tag}`, msg.delte.displayAvatarURL())
    .addField('Canal', `<#${msg.canal.id}>`)
    .setDescription(msg.content)
    .setColor('RANDOM')

    message.channel.send(embed)
}
    }
};