const Discord = require('discord.js')
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'ppt', //el nombre del comando
    description: 'Comando piedra, papel, tijera', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...

const embed = new Discord.MessageEmbed()
.setTitle('Piedra, papel o tijera')
.setDescription('Pon los comandos `r!piedra`, `r!papel` o `r!tijera`')
.setColor('GREEN')
message.channel.send(embed)
}
};