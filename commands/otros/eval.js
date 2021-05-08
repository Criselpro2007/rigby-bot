const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const { inspect } = require("util")
module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'eval', //el nombre del comando
    description: 'eval', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...

        let perrito = [
            "https://media.tenor.com/images/2c2af3335492daf6fa8c90f6bd486b59/tenor.gif",
            "https://media.tenor.com/images/bbf33e3235abc942ea3a8a8dad52d0dc/tenor.gif",
            "https://media.tenor.com/images/6e7741ad3216342d4c163a343ba6e771/tenor.gif",
            "https://media.tenor.com/images/1202558f592462df523844f3ae505e46/tenor.gif",
            "https://media.tenor.com/images/6740fb2ff453b38b26769535ba885076/tenor.gif",
            "https://media.tenor.com/images/94083b8d53040467d21405a26ef2f453/tenor.gif",
            "https://media.tenor.com/images/b5f4c495ee53db0bc1298dab4243cc36/tenor.gif",
            "https://media.tenor.com/images/f899f9e4ede98ae8907ed2d4dc16e0e6/tenor.gif",
            "https://media.tenor.com/images/0bbc589ada726e4105dff1e1f6b20559/tenor.gif",
            "https://media.tenor.com/images/4159efc6d1450a847ada92ba9b878029/tenor.gif",
            "https://media.tenor.com/images/3aa989237eee24addf9d0629a3960d70/tenor.gif",
            "https://media.tenor.com/images/dce3b63644c05caabed17f32c6644163/tenor.gif",
            "https://media.tenor.com/images/a0266733dce4a1f5cc1c3ecbab87fd61/tenor.gif",
            "https://media.tenor.com/images/8ffdd09c67eed4123bddc40184eefa1a/tenor.gif",
            "https://media.tenor.com/images/d8b75bee13c3a6ecdc7e770f9c528e8a/tenor.gif",
            "https://media.tenor.com/images/245a73e9f05d2a5f0c63fe8c6256c32a/tenor.gif",
            "https://media.tenor.com/images/634e0f5c5e8f6455b8d30a385a8605d0/tenor.gif",
            "https://media.tenor.com/images/2f71f7e0325e8b33ec6e15feb654d24e/tenor.gif",
            "https://media.tenor.com/images/aa4a03444f281e163801445a4e096374/tenor.gif",
            "https://media.tenor.com/images/1a0d15dc0cd0bf6dcca2322b6fca163e/tenor.gif",
            "https://media.tenor.com/images/62a6e408d9e027292c2ce872493f8cde/tenor.gif"

        ];
        const embed1 = new Discord.MessageEmbed()
        .setTitle('No puedes hacer eso, pero aqui­ tienes un perrito')
        .setImage(perrito[Math.floor(Math.random() * perrito.length)])
        .setColor('YELLOW')
        if(message.author.id !== '530051011734274068') return message.channel.send(embed1)
        
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