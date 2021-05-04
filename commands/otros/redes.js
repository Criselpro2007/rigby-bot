const Discord = require('discord.js')
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'redes', //el nombre del comando
    description: 'Mira las redes del creador', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...
        const embed = new Discord.MessageEmbed()

        .setTitle('Redes de mi creador')
        .setDescription('Si quieres apoyarme y a mí creador, siguelo en sus redes y invítame a tu  servidor de  discord')
        .addField("Youtube", "[Cris El Pro](https://www.youtube.com/channel/UC1EUoQeQLqPfoqCb88kKX4Q?view_as=subscriber)", true)
        .addField("Instagram", "[@criselpro_1](https://www.instagram.com/criselpro_1/saved/?hl=es-la)", true)
        .setColor("RANDOM")
        .setFooter("Rigby Bot")
        
        message.channel.send(embed);
    }
};