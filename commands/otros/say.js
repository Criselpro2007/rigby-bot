module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'say', //el nombre del comando
    description: 'el bot dice lo que quieras', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...
        
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send ('Necesito permisos de **GESTIONAR MENSAJES**')
    if(!message.guild) return;
if(message.content.includes('@')) return message.channel.send('Me niego a escribir eso!')

  if(!args) return msg.channel.send(`Debes escribir un mensaje para enviar.`);
  message.delete()
        message.channel.send(args.slice(1).join(" ")) //pong!
    }
};