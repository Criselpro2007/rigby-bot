module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'say', //el nombre del comando
    description: 'el bot dice lo que quieras', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...
        
        

        if(!args) return message.channel.send(`debe escribir un mensaje a enviar.`);
        message.delete();
        message.channel.send(args.slice(1).join(" ")) //pong!
    }
};