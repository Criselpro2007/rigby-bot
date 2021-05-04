module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'piedra', //el nombre del comando
    description: 'piedra', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...
        const embedf = new Discord.MessageEmbed()
          
    
          .setDescription(':newspaper: | Elijo papel, te gané viejo OOoOOoOo')
          .setColor('RED')
          .setFooter('Rigby Bot')

          const embede = new Discord.MessageEmbed()
          
    
          .setDescription(':gem: | Elijo roca, empate, odio cuando eso pasa, en especial cuando pasa 100 veces y un monstruo aparece')
          .setColor('YELLOW')
          .setFooter('Rigby Bot')

          const embedw = new Discord.MessageEmbed()
          
    
          .setDescription(':scissors: | Elijo tijeras, noooo perdí, ya te ganaré a la próxima')
          .setColor('GREEN')
          .setFooter('Rigby Bot')

        let frase = [

            embedf,
            embede,
            embedw,
            
          ];
    
          message.channel.send(frase[Math.floor(Math.random() * frase.length)]);
    }
};