module.exports = { //exportamos el nombre, la descripción y la función execute
    name: 'ping', //el nombre del comando
    description: 'El mejor comando!', //la descripción (opcional)
    execute(client, message, args) { //ejecutamos...!
    

let ping = Math.floor(message.client.ping);
    message.channel.send(":ping_pong: Pong!")
    .then(msg => {
        
        msg.edit(`:ping_pong: Pong! | :incoming_envelope: Ping Mensajes: \`${Math.floor(msg.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
})
    }
};