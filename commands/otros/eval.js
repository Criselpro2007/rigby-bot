const Discord = require('discord.js');
const { inspect } = require("util")
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'eval', //el nombre del comando
    description: 'eval', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...

        if(message.author.id !== '530051011734274068') return message.channel.send("No puedes usar este comando!")
        
        const command = args.join(" ")
        if(!command) return message.channel.send('Debes escribir un comando')

        try {
         const evaled = eval(command)
         let palabras = ["token", "destroy"]
         if(palabras.some(word => message.content.toLowerCase().includes(word))){
             return message.channel.send("Esas palabras no están permitidas!")
         }   
         const embed = new Discord.MessageEmbed()
         .setColor('GREEN')
         .setTitle('Evaluado!')
         .addField(`**Tipo**:`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
         .addField('**Evaluado en:**', `\`\`\`yaml\n${Date.now() - message.createdTimestamp}ms\`\`\``, true)
         .addField(`**Entrada**`, `\`\`\`js\n${command}\`\`\``)
         .addField(`**Salida**`, `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
         message.channel.send(embed)
        } catch (error) {
            const embedfallo = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Entrada`, `\`\`\`js\n${command}\`\`\``)
            .addField(`Error`, `\`\`\`js\n${error}\`\`\``)

            message.channel.send(embedfallo)
        }
    }
}