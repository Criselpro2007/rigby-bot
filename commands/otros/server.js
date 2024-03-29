const Discord = require('discord.js')
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'server', //el nombre del comando
    description: 'Comando para ver características del server en el que lo pones', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...
        var server = message.guild;

        const embed = new Discord.MessageEmbed()
        .setThumbnail(server.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField('ID', server.id, true)
        .addField('Region', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', server.owner.user.tag+' ('+server.owner.user.id +')', true)
        .addField('Miembros', server.memberCount, true)
        .addField('Roles', server.roles.cache.size, true)
        .setColor('#0x66b3ff')
        
        message.channel.send(embed);
    }
};