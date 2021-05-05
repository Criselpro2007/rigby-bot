const Discord = require('discord.js');

const got = require('got');
require('dotenv/config');
//Otros npm que vayas a instalar...

const { versión } = require('./config.json');

const client = new Discord.Client();



const owner = process.env.OWNER;
const TOKEN = process.env.TOKEN;

const firebase = require('firebase/app');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore();

const fs = require('fs') //llamamos a la librería fs, ya viene instalada por defecto

client.commands = new Discord.Collection(); //Creamos la colección de comandos

function cargarComandos(ruta) { //Creamos una función llamada cargarComandos
  
  for (const file of fs.readdirSync(ruta, { withFileTypes: true })) { //iniciamos un bucle for of que lea todos los archivos de la carpeta que pongamos al llamar a la función

    if (file.name.endsWith(".js")) { //si el archivo acaba por .js
      let comando = require(`./${ruta}/${file.name}`); //creamos la variable comando que en su interior tenga la ruta de esa carpeta y el nombre
      client.commands.set(comando.name, comando); //añadimos a la colección el nombre del comando y la ruta del comando

    } else if (file.isDirectory()) { //si el archivo es una carpeta, va a recurrir, es decir, se va a ejecutar la función dentro de la misma función.
      cargarComandos(`${ruta}/${file.name}`); //llamamos a la función de la carpeta

    }
  }
}

cargarComandos("./commands");

client.once('ready', () => {
    console.log('Estoy en línea');
});

client.once('ready', () => {
    console.log(client.user.tag + ' cargado y listo viejo!');
    let prefix = process.env.prefix;
    client.user.setActivity(". . .", { type: "PLAYING" }); //Un interval de reinicio de bot.
        setInterval(function () { //La función interval.
          let statuses = [`Videojuegos con Mordecai | r!help`, `Bebiendo chocolate caliente | r!help`, `Estoy en ${client.guilds.cache.size} servidores`, `Estoy en mi versión ${versión} | r!help`]; //El array de Status
          let status = Math.floor(Math.random() * statuses.length); //Un math random del array.
          client.user.setPresence({ //La presencia.
            activity: { //Actividad
              name: statuses[status], //El nombre, que sería el array random
              type: "PLAYING"// Tipo, puede ser PLAYING STREAMING LISTENING WATCHING
            },
            status: "online" //Estado, puede ser Online, Offline, Dnd, idle
          }); //Cerramos SetPresence
        }, 5000); //Tiempo en ms
      
});

client.snipes = new Map()

client.on("message", message => {

if(!message.guild) return; //Si el mensaje es por MD retornamos
   if(!message.content.startsWith(prefix) || message.author.bot) return; //si el mensaje no empieza 3 por el prefijo, o el autor es un bot, retornamos
   if(!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return message.channel.send("No tengo permisos para mandar embeds"); //si el bot no tiene permisos de mandar embeds, enviamos un mensaje de error
 
   const args = message.content.slice(prefix.length).split(/ +/); //definimos args
   const command = args.shift().toLowerCase(); //definimos command

   if (!client.commands.has(command)) return; //si la colección de comandos que creamos anteriormente no tiene el comando ejecutado, retornamos.

   try {
     client.commands.get(command).execute(client, message, args); //llamamos a la función que crearemos posteriormente, dentro de ella estará el código del comando
   } catch (error) {
     console.error(error);
     client.users.cache.get('530051011734274068').send('Hay un error en mi programa') //si hay error, se mostrará en consola
     message.channel.send("Ha ocurrido un error")
   }

});
//Aquí irán tus scripts
///////JUEGOS///////

///////PIEDRA, PAPEL O TIJERA///////

///PIEDRA///
client.on("message", async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.content.startsWith(prefix)) {
  if(command === 'piedra') {
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
    return
  
//papel
  }else if (command === 'papel') {
    const embedf = new Discord.MessageEmbed()
          
    
    .setDescription(':scissors: | Elijo tijeras, te gané viejo OOoOOoOo')
    .setColor('RED')
    .setFooter('Rigby Bot')

    const embede = new Discord.MessageEmbed()
    

    .setDescription(':newspaper: | Elijo papel, empate odio cuando eso pasa, en especial cuando pasa 100 veces y un monstruo aparece')
    .setColor('YELLOW')
    .setFooter('Rigby Bot')

    const embedw = new Discord.MessageEmbed()
    

    .setDescription(':gem: | Elijo roca, noooo perdí, ya te ganaré a la próxima')
    .setColor('GREEN')
    .setFooter('Rigby Bot')

  let frase = [

    embedf,
    embede,
    embedw,
      
    ];

    message.channel.send(frase[Math.floor(Math.random() * frase.length)]);
      return  
      
//Tijera
      }if (command === 'tijera') {
        const embedf = new Discord.MessageEmbed()
          
    
    .setDescription(':gem: | Elijo roca, te gané viejo OOoOOoOo')
    .setColor('RED')
    .setFooter('Rigby Bot')

    const embede = new Discord.MessageEmbed()
    

    .setDescription(':scissors: | Elijo tijeras, empate odio cuando eso pasa, en especial cuando pasa 100 veces y un monstruo aparece')
    .setColor('YELLOW')
    .setFooter('Rigby Bot')

    const embedw = new Discord.MessageEmbed()
    

    .setDescription(':newspaper: | Elijo papel, perdí, ya te ganaré a la próxima')
    .setColor('GREEN')
    .setFooter('Rigby Bot')

  let frase = [

    embedf,
    embede,
    embedw,
      
    ];

    message.channel.send(frase[Math.floor(Math.random() * frase.length)]);
      return

//Pescar
      }if (command === 'pescar') {
        let frasew = [

          ':white_check_mark: | Bien hecho, **pescaste** un :athletic_shoe: la gente bota mucha basura',
          ':white_check_mark: | Bien hecho, **pescaste un pez** :fish: llevatelo a casa y comelo con tu familia o bótalo, a mi me da igual hermano',
          ':white_check_mark: | Pero que buena suerte, **pescaste un diamante** :gem: ve a comprar la lotería de inmediato',
          ':white_check_mark: | Bien hecho, **pescaste una cama grandiosa** :bed:',
          ':neutral_face: | No es ni bueno ni malo, pero **pescaste un resfriado** jajaja',
          ':white_check_mark: | Bien hecho, **pescaste un reloj de oro** :hand_splayed::watch:',
          ':white_check_mark: | Que buena suerte amigo, **pescaste una Playstation 5** :video_game: y entonces, ¿puedo ir a tu casa a jugar?',
          ':white_check_mark: | No me lo creo **pescaste un pc gamer** :desktop::keyboard: te doy $5 por él y me estoy arriesgando',
        ];
        let frasex = [
          ':x: | Lo lamento pero los **peces se comieron tu carnada**, pero ve el lado positivo, alimentaste a los patitos',
          ':x: | Lo lamento, pero **no pescaste nada**',
          ':x: | Lo lamento si eres menor pero **pescaste una botella de champaña** :champagne:',
          ':x: | O no viejo, **pescaste una bolsa de compras** :shopping_bags:',
          ':x: | Empieza a correr, porque **pecaste un tiburón** :shark:',
          ':x: | Que mal, **pescaste un puerta** :door:',
          ':x: | ¿Eso es una **tapa del WC**?',
        ];
        const embedw = new Discord.MessageEmbed()
        .setTitle('Éxito pescando')
        .setDescription(frasew[Math.floor(Math.random() * frasew.length)])
        .setFooter('Rigby Bot')
        .setColor('GREEN')

        const embedx = new Discord.MessageEmbed()
        .setTitle('Fallo pescando')
        .setDescription(frasex[Math.floor(Math.random() * frasex.length)])
        .setFooter('Rigby Bot')
        .setColor('RED')

      let frases = [
        embedw,
        embedx,
      ];
        message.channel.send(frases[Math.floor(Math.random() * frases.length)]);
        return

//Dado
      }if (command === 'dado') {
        let frase = [

          ':game_die: | Sacaste un :one: suerte para la próxima hermano',
          ':game_die: | Sacaste un :two: no está mal, es un 2, no un :one:',
          ':game_die: | Sacaste un :three: es la mitad de lo máximo que puedes sacar, no está ni bien ni mal',
          ':game_die: | Sacaste un :four: es muy bueno mi amigo',
          ':game_die: | Sacaste un :five: casi consigues el máximo',
          ':game_die: | Sacaste un :six: es lo máximo, celebra viejo',
          
        ];
        
        const embed = new Discord.MessageEmbed()
        
      
        .setDescription(frase[Math.floor(Math.random() * frase.length)])
        .setColor('RANDOM')
        .setFooter('Rigby Bot')
      
        message.channel.send(embed);
        return

//8ball
      }if (command === '8ball') {
        let frase = [

          ':8ball: | Hoy es tu día de suerte',
          ':8ball: | Sí',
          ':8ball: | No',
          ':8ball: | Tal vez',
          ':exclamation: | Comprate una bola 8, yo soy un bot amiguito',
          ':8ball: | Mejor ve con tus amigos',
          
        ];
        
        const embed = new Discord.MessageEmbed()
        
        .setTitle(':8ball: | Bola 8')
        .setDescription(frase[Math.floor(Math.random() * frase.length)])
        .setColor('RANDOM')
        .setFooter('Rigby Bot')
  
        message.channel.send(embed);
        return

//Tragamonedas
      }if (command === 'tragamonedas') {
        let frase = [

          ':coin: | Sacaste :cherries::cherries::seven: suerte para la próxima',
          ':coin: | Sacaste :slot_machine: ¡FELICIDADES!',
          ':coin: | Sacaste :spades::clubs::diamonds: suerte para la próxima',
          ':coin: | Sacaste :cherries::cherries::cherries: ¡FELICIDADES!',
          ':coin: | Sacaste :hearts::hearts::spades: suerte para la próxima',
          ':coin: | Sacaste :hearts::hearts::hearts: ¡FELICIDADES!',
          ':coin: | Sacaste :100::seven::clubs:',
          ':coin: | Sacaste :diamonds::diamonds::diamonds: ¡FELICIDADES!',
          
        ];
        
        const embed = new Discord.MessageEmbed()
        
        .setTitle(':slot_machine: | Máquinas tragamonedas')
        .setDescription(frase[Math.floor(Math.random() * frase.length)])
        .setColor('RANDOM')
        .setFooter('Rigby Bot')
  
        message.channel.send(embed);
        return
      
///Meme
      }if (command === 'meme') {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
          let content = JSON.parse(response.body);
          let memeimage = content[0].data.children[0].data.url;
          let memetitle = content[0].data.children[0].data.title;
          let memeLikes = content[0].data.children[0].data.ups;
          
          embed.setTitle(`${memetitle}`)
          embed.setImage(memeimage)
          embed.setColor('RANDOM')
          embed.setFooter(`👍 ${memeLikes}`)

          message.channel.send(embed);
          return

        })

/////MODERACIÓN
//Ban
      }if (command === 'ban') {
        if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
                  return message.channel.send('No tengo permisos para banear gente')
                }
                
                if (!message.member.permissions.has('BAN_MEMBERS')) {
                  return message.channel.send('No puedes banear gente')
                }
                
                let persona = message.mentions.members.first() || 
                  message.guild.members.resolve(args[0])
                
                if (!persona) {
                  return message.reply('Debes mencionar a alguien para banear')
                } else if(!persona.bannable){
                  return message.channel.send('No puedo banear a esta persona')
                }else if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) {
                  return message.channel.send('Esta persona esta en el mismo o mayor rol o nivel que tú, no puedes banearlo')
                }
                
                var razon = args.slice(1).join(' ')
                if (!razon) {
                  razon = 'Razon no especificada'
                }
                
                razon += `, Baneado por ${message.author.tag}`
                
                message.guild.members.ban(persona, {
                  reason: razon
                })
                  .catch(e => message.reply('Ocurrio un **error** desconocido'))
                  .then(() => {
                    message.channel.send(`Listo, **${persona.user.tag}** ha sido baneado`)
                    return
                  })     
                
//Kick
      }if (command === 'kick'){

        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
    
        var perms = message.member.hasPermission("KICK_MEMBERS");
    
      if(!perms) return message.channel.send("`Error` `|` No tienes permiso para usar este comando.");
      if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.');
    
      if (!razon) return message.channel.send('Escribe una razón, `r!kick @username [razón]`');
      if (!message.guild.member(user).kickable) return message.reply('No puedo kickear al usuario mencionado.');
            
      message.guild.member(user).kick(razon);
      message.channel.send(`**${user.username}**, fue kickeado del servidor, razón: ${razon}.`);
      return

      
/////INTERACCIÓN
//Golpe mortal
      }if (command === 'golpe') {
        let img = message.mentions.users.first();


        let gif = [
          
        "https://thumbs.gfycat.com/SoulfulLeftEel-size_restricted.gif",
        "https://images-ext-1.discordapp.net/external/F1RHUV2thnGY47Wqibq-0ZX1MxB7KvM0WsmWsjEWs8w/https/comicvine1.cbsistatic.com/uploads/original/11117/111173561/5635869-1188145255-56358.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/ehDxnPGeOiqroj5_ws7dYJGSLkGxgMQUR1jhdNCjZf8/https/data.whicdn.com/images/28620053/original.gif?width=400&height=224",      
          
        ];
        
        if(!message.mentions.users.first()) return message.channel.send(`${message.author.username} Debes mencionar a alguien para golpear viejo`)
        
        const embed = new Discord.MessageEmbed()
        
        .setTitle(`${message.author.username} le dió un golpe mortal a ${img.username}`)
        .setColor('RANDOM')
        .setImage( gif[Math.floor(Math.random() * gif.length)] )
        .setFooter('Rigby Bot');
        
         message.channel.send(embed);
         return

//Bloqueo mortal
      }if (command === 'bloqueo') {
        let img = message.mentions.users.first();


        let gif = [
          
        "https://images-ext-1.discordapp.net/external/BG_XedCKnMoyCgZ8OsNrCmGIKBllq2MTvk63-5wu8CE/https/img.fireden.net/co/image/1458/68/1458687566497.gif?width=400&height=225",
        "https://images-ext-2.discordapp.net/external/Rp3Na88RuXmuDq_jXP4M_1BuFNNTMSUEAfR7XXpk2nY/https/static3.comicvine.com/uploads/original/11117/111173561/5635886-1153434774-56358.gif?width=400&height=225",   
          
        ];
        
        if(!message.mentions.users.first()) return message.channel.send(`${message.author.username} Debes mencionar a alguien para bloquear su golpe`)
        
        const embed = new Discord.MessageEmbed()
        
        .setTitle(`${message.author.username} bloqueó el golpe de ${img.username}`)
        .setColor('RANDOM')
        .setImage( gif[Math.floor(Math.random() * gif.length)] )
        .setFooter('Rigby Bot');
        
         message.channel.send(embed);
         return

//Control
      }if (command === 'control') {
        let img = message.mentions.users.first();


        let gif = [
          
        "https://media1.tenor.com/images/09a9c921041462e06b8a8f396e0e7d56/tenor.gif?itemid=4849921",
        "https://vignette.wikia.nocookie.net/regularshow/images/9/94/RIGBYYMORDECAIEN_EL_PODER.gif/revision/latest?cb=20121229221739&path-prefix=es",
        "https://k43.kn3.net/taringa/2/2/1/6/6/7/78/uncorazonvolador/B75.gif",
        "https://i.pinimg.com/originals/8f/3c/40/8f3c405173c7703e30350f6083ed7215.gif",
        "https://media1.tenor.com/images/8b6ed3776eca10b2173a6a216dd3c7d2/tenor.gif?itemid=5179432",
        "https://media.tumblr.com/tumblr_lsdaefk9oN1qmo0bao1_500.gif",
        "https://thumbs.gfycat.com/UniqueHeartyLarva-size_restricted.gif",
        "https://24.media.tumblr.com/tumblr_lvm07xk72V1r2sm3jo1_500.gif",
        "https://64.media.tumblr.com/18a4dc0432f4d48c0b9cca8256cb9ed5/tumblr_ovv4d5kVf21v4j5emo1_540.gif",
        "https://64.media.tumblr.com/tumblr_ll8v2hW3JC1qc7bqwo1_400.gif",      
          
        ];
        
        if(!message.mentions.users.first()) return message.channel.send(`${message.author.username} Debes mencionar a alguien para poder controlarlo y que haga lo que quieras hermano :woozy_face:`)
        
        const embed = new Discord.MessageEmbed()
        
        .setTitle(`${message.author.username} está controlando a ${img.username}`)
        .setColor('RANDOM')
        .setImage( gif[Math.floor(Math.random() * gif.length)] )
        .setFooter('Rigby Bot');
        
         message.channel.send(embed);
         return

//Salto mortal
      }if (command === 'salto') {

        let gif = [
          
        "https://images-ext-1.discordapp.net/external/4goq5zVNkmQU5-6igDbNpMkqL-CV1IBXnMNQ1YKcblA/https/static3.comicvine.com/uploads/original/11117/111173561/5638413-6111180073-14839.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/OCGMlWMhEYAsolH6j1fgeYK5f3FZT0GcGhZguPRvM3k/https/comicvine1.cbsistatic.com/uploads/original/11117/111173561/5635915-8487668226-14838.gif?width=400&height=225",
        "https://images-ext-1.discordapp.net/external/EmqEis9Bed-ObQRmGtv-QE4vQ35yJaKGxP2hv45C5Vc/https/static.comicvine.com/uploads/original/11117/111173561/5638415-3224543453-14839.gif?width=400&height=225",   
          
        ];
        
        
        const embed = new Discord.MessageEmbed()
        
        .setTitle(`${message.author.username} dió un salto mortal`)
        .setColor('RANDOM')
        .setImage( gif[Math.floor(Math.random() * gif.length)] )
        .setFooter('Rigby Bot');
        
         message.channel.send(embed);
         return
//Feliz
      }if (command === 'feliz') {


        let gif = [
  
          "https://media1.tenor.com/images/6d323bf4f5b1782791e60cd2755d90d8/tenor.gif?itemid=5877933",
          "https://i.imgur.com/ccBD0.gif",
          "https://media1.tenor.com/images/5f10a18f257ce2379ee188e9eb3c9ddd/tenor.gif?itemid=5407353",
          "https://thumbs.gfycat.com/BlaringSnoopyHart-small.gif",
          "https://media1.tenor.com/images/3921e939b784bf1ffe113ec754e81499/tenor.gif?itemid=16417165",
          "https://media1.tenor.com/images/f9d8800ad6f2d7a1619e5392b881b8f9/tenor.gif?itemid=16011750",
          "https://i.pinimg.com/originals/96/4e/2f/964e2f18a18d8317c98b7572409faa9a.gif",
          "https://i.gifer.com/R8d.gif",
          "https://media1.tenor.com/images/cb235fb15d688ebd3b79df8b34e04459/tenor.gif?itemid=3420150",
          "https://24.media.tumblr.com/tumblr_m6tfjbHYnP1r0dbsno1_500.gif",
          "https://media3.giphy.com/media/124Tqt4CuS4vHq/giphy.gif",
          "https://thumbs.gfycat.com/DelectableScaredHorseshoecrab-max-1mb.gif",
          "https://static.wixstatic.com/media/705c45_b9aa4eb26adb4d74a58ab622e10e2554~mv2.gif",
          "https://64.media.tumblr.com/tumblr_m7udv1I8pL1ru3xuao1_500.gif",
          "https://24.media.tumblr.com/tumblr_m7bqdaYVgj1qh8rq6o1_500.gif",
          "https://66.media.tumblr.com/ec6c31d3e3a34a2bd69f0395461d6e9c/tumblr_o9xg6k7F1j1so18vqo1_500.gif",
          "https://49.media.tumblr.com/466c4614e2ef6d0ff7f4d6dc22c28b40/tumblr_n1482n3XMa1tt179go1_500.gif",
          "https://67.media.tumblr.com/671e9956004c91525d86e28b7ae53690/tumblr_o6o6yqH8hg1sxhdxso1_500.gif",
          "https://i.pinimg.com/originals/94/0d/ab/940dab7c7fbb43711f6216aada4ae5c7.gif",
          "https://64.media.tumblr.com/f7a4a2a13a306cf097d4a37cdb72788d/fac217726930bd35-7e/s500x750/d784214f93550123fe35076464e4dd952d5907f6.gif",
          "https://64.media.tumblr.com/1d3e685a2a48ee1898d9e5ce739054d6/tumblr_ok1kqdxezM1so18vqo5_500.gif",
          
          ];
          
          
          const embed = new Discord.MessageEmbed()
          
          .setTitle(`${message.author.username} está felíz`)
          .setColor('RANDOM')
          .setImage( gif[Math.floor(Math.random() * gif.length)] )
          .setFooter('Rigby Bot');
          
           message.channel.send(embed);
           return
//Triste
      }if (command === 'triste') {
        let gif = [
  
          "https://media1.tenor.com/images/eba96fb8539dbd4030747eb9280cee9a/tenor.gif?itemid=17387826",
          "https://media1.tenor.com/images/306c85f80b72d55800860c583b6887ce/tenor.gif?itemid=5179430",
          "https://thumbs.gfycat.com/GrouchyUnitedAsianpiedstarling-size_restricted.gif",
          "https://66.media.tumblr.com/d753908038828895fc9a63b844cc1cf8/tumblr_o9xfz6tI531so18vqo1_500.gif",
          "https://24.media.tumblr.com/7c6a3d9739788e8dfbee5a64a928375a/tumblr_mt686mLyLY1rbdihro1_500.gif",
          "https://i.gifer.com/1vU7.gif",
          "https://giffiles.alphacoders.com/293/29377.gif",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiStMQ5bF6s-NhVP7VCNS52HPvwnVqt5LzuA&usqp=CAU",
          "https://64.media.tumblr.com/3257723718461eb468f9871515ec80dd/tumblr_p1y73zz0kG1ttzahko1_400.gifv",
          "https://k35.kn3.net/taringa/6/4/8/6/6/7/9/sk8milosk8/164.gif?3904",
          "https://64.media.tumblr.com/08283fa2e120f75acc072dc49c707bba/tumblr_okd4h5RSDE1v4u9a3o1_400.gifv",
          "https://d.wattpad.com/story_parts/378/images/147db7ee2b443caa350260307049.gif",
          "https://data.whicdn.com/images/44986013/original.gif",
           
          ];
          
          
          const embed = new Discord.MessageEmbed()
          
          .setTitle(`${message.author.username} está triste`)
          .setColor('RANDOM')
          .setImage( gif[Math.floor(Math.random() * gif.length)] )
          .setFooter('Rigby Bot');
          
           message.channel.send(embed);
           return
//Enojado
      }if (command === 'enojado') {
        let gif = [
  
          "https://i.gifer.com/1gYc.gif",
          "https://24.media.tumblr.com/tumblr_lromhkrFW51r2g7mto1_500.gif",
          "https://media1.tenor.com/images/50a17f68c2966e8c59de5322e5f8d870/tenor.gif?itemid=17829794",
          "https://i.imgur.com/oHs7E.gif",
          "https://media1.tenor.com/images/48396d085797cd2aa4cbd72a0014bc70/tenor.gif?itemid=3420156",
          "https://31.media.tumblr.com/7e3f6844f7f55c392249705281f2f707/tumblr_msgmbga5YK1qglee5o2_500.gif",
          "https://68.media.tumblr.com/36e8a09c230c29410337f4e49f129b34/tumblr_o8okvi9Q501so18vqo1_500.gif",
          "https://i.gifer.com/20K7.gif",
          "https://i.gifer.com/Emn.gif",
          "https://24.media.tumblr.com/26b5c50b776ab75ff422c8befc02c9fb/tumblr_mh36dpYfST1s3lbamo1_500.gif",
          "https://vignette.wikia.nocookie.net/p__/images/9/99/Muscleman_running.gif/revision/latest?cb=20170515212746&path-prefix=protagonist",
          "https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/sad-sandwich.gif",
          "https://static.fjcdn.com/gifs/Its+death+bear+just+a+gif+i+took+from+regular_9a2e6c_4641691.gif",
          "https://pa1.narvii.com/6646/64da466441acb4bf4cb65cac85bfe63ab741cf1f_hq.gif",
          "https://media1.tenor.com/images/752d2f8c2d5eba3b551f28512355ed5f/tenor.gif?itemid=3475964",
          "https://thumbs.gfycat.com/GeneralQualifiedBarbet-small.gif", 
          "https://64.media.tumblr.com/20c398a8aacde4b4ede39e5b046cb407/tumblr_nhxa496aCo1r618jko2_500.gifv",
          "https://64.media.tumblr.com/2513fc822596fe086ada37e6c13ce449/tumblr_olxybuqMsy1ubgbcqo2_500.gifv",  
            
          ];
          
          
          const embed = new Discord.MessageEmbed()
          
          .setTitle(`${message.author.username} está muy molesto`)
          .setColor('RANDOM')
          .setImage( gif[Math.floor(Math.random() * gif.length)] )
          .setFooter('Rigby Bot');
          
           message.channel.send(embed);
           return
//Sorprendido
      }if (command === 'sorprendido') {
        let gif = [
  
          "https://media1.tenor.com/images/53e6909e7e029c8d460bbcc67137fe55/tenor.gif?itemid=6133511",
          "https://media1.tenor.com/images/c3d1fbc821cac53f78bd662564fac0ee/tenor.gif?itemid=14897848",
          "https://68.media.tumblr.com/9142759fe909a21cb09674ad3b295d9d/tumblr_o6rih7itm01so18vqo1_500.gif",
          "https://media1.tenor.com/images/66c7f9ad28d9ad51c64aafb6b9a94fcd/tenor.gif?itemid=17387822",
          "https://64.media.tumblr.com/1460547fdabf921c55132288c3010519/tumblr_p7t2qfgs7u1x0bvwko2_500.gifv",
          "https://media1.tenor.com/images/8254f2ef34b3ea365efcd8fc5a863605/tenor.gif?itemid=16417166",
          "https://media1.tenor.com/images/66c7f9ad28d9ad51c64aafb6b9a94fcd/tenor.gif?itemid=17387822",
          "https://i.gifer.com/3JNZ.gif",
          "https://i.gifer.com/20K3.gif",
          "https://vignette.wikia.nocookie.net/regularshow/images/8/80/Neee.gif/revision/latest?cb=20120530202946&path-prefix=es",
          
          ];
          
          
          const embed = new Discord.MessageEmbed()
          
          .setTitle(`${message.author.username} está sorprendido`)
          .setColor('RANDOM')
          .setImage( gif[Math.floor(Math.random() * gif.length)] )
          .setFooter('Rigby Bot');
          
           message.channel.send(embed);
           return
//Asustado
      }if (command === 'asustado') {
        let gif = [
  
          "https://38.media.tumblr.com/3015a715230449e970105002291dad8f/tumblr_ntwwh8Isfm1so18vqo1_1280.gif",
          "https://i.gifer.com/2ERl.gif",
          "https://media1.tenor.com/images/20f4535bc55f32ab149ecb100c3bfb3d/tenor.gif?itemid=17410126",
          "https://media1.giphy.com/media/2doyu23tso0tBfJWo0/source.gif",
          "https://media1.tenor.com/images/459e75547d55d4a365b7a70edaa52d9d/tenor.gif?itemid=17410133",
          "https://media1.tenor.com/images/79d4b0dbe303e20d960f65e0a4b4bdf2/tenor.gif?itemid=16417179",
          "https://31.media.tumblr.com/66002b67d4b5661397f19baf492ecfbb/tumblr_mf6v0lw0t81r9cclvo1_500.gif",
          "https://i.gifer.com/ui6.gif",
          "https://images6.fanpop.com/image/photos/39300000/Regular-Show-gifs-regular-show-39375242-500-280.gif",
          "https://em.wattpad.com/79703bb7dd6e4336feb1b3f3d673b1f5a5599a4a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f573031436f3676304377427661673d3d2d3239343535333339382e313436383463313664323364376263323639333732353132363633312e676966",
          "https://4.bp.blogspot.com/-GDEpY70oElU/Uz2819aA82I/AAAAAAAAACo/K0iXLtIGGB4/s1600/tumblr_m13rvimVtx1qh8rq6o1_500.gif",
          
          ];
          
          
          const embed = new Discord.MessageEmbed()
          
          .setTitle(`${message.author.username} está asustado`)
          .setColor('RANDOM')
          .setImage( gif[Math.floor(Math.random() * gif.length)] )
          .setFooter('Rigby Bot');
          
           message.channel.send(embed);
           return
//Celebrar
      }if (command === 'celebrar') {
        let gif = [
  
          "https://media1.tenor.com/images/cc3209c8f6960f36c43e34005fbf9607/tenor.gif?itemid=5715487",
          "https://media1.tenor.com/images/30e6cb7606290b339fd2cd13606cd6bb/tenor.gif?itemid=5715488",
          "https://media1.tenor.com/images/1e8739e386f1fa9ae30cae85ee70f082/tenor.gif?itemid=5715486",
          "https://media1.tenor.com/images/dda49a8ea129b3a688174bede6ac703e/tenor.gif?itemid=5625669",
          "https://media1.tenor.com/images/e3bb5233f28c4c688787c48626dd837a/tenor.gif?itemid=5877936",
          "https://media.tenor.com/images/1c98d03f61746fd76caad104c5a342b4/tenor.gif",
          "https://media.tenor.com/images/20e829f21b027b506a4352cbc90688da/tenor.gif",
          "https://media1.tenor.com/images/9a2ff7141790ecceab18a5a8988825ed/tenor.gif?itemid=5116055",
          "https://media1.tenor.com/images/46ba86b4d0d01b9a09245ee7ba5d1868/tenor.gif?itemid=4754591",
          "https://media1.tenor.com/images/cc4b8b2cee4f9667b15c797948b3e604/tenor.gif?itemid=4115492",
          "https://media1.tenor.com/images/08d12d24d6c39ea1ffefc5489364d4d4/tenor.gif?itemid=5642091",
          "https://media.tenor.com/images/f37eab771153404662b156aa12492f98/tenor.gif",
          "https://media.tenor.com/images/7afff1833db5db1eaeda3cbd1c710867/tenor.gif",
          "https://media.tenor.com/images/fa42992d44983ee665e56b3b08ebe31d/tenor.gifhttps://media1.tenor.com/images/39ebd2f7d0acaf32b4d48dcee91a1d3f/tenor.gif?itemid=13409960",
          "https://i.gifer.com/5Dd6.gif",
          "https://media.tenor.com/images/a85c7aa49cd6350d23f09dca65514df8/tenor.gif",
          "https://media.tenor.com/images/be71e23e62dfd241b8803494c36c112f/tenor.gif",
          "https://media.tenor.com/images/04c9d8afa4fc232bf3ab30ab71f97642/tenor.gif",
          "https://media.tenor.com/images/08facdc8053df5a677647d5a73dd84c0/tenor.gif",
          "https://media.tenor.com/images/e29fb0dd13c3faa556f5792564d2da7e/tenor.gif",
          "https://media.tenor.com/images/f6b14dd73c676b6354c2bbeb54b708ab/tenor.gif",
          "https://media.tenor.com/images/3de447a05d7c473d314a80a32975c04a/tenor.gif",
          "https://media.tenor.com/images/31a4c24cb8c41850cdcf56770d7a6d74/tenor.gif",
          "https://media.tenor.com/images/a14de7d554adba8a196ac68b27c70df6/tenor.gif",
          "https://media.tenor.com/images/13a94f37f5a161310180443c891bbf58/tenor.gif",
          "https://media.tenor.com/images/d4fff8c2bcebecd0efc54b11ca27c662/tenor.gif",
          "https://media.tenor.com/images/3ef4bc671ef71b376afbb77f5897dc96/tenor.gif",
          "https://media.tenor.com/images/d76bc3d21d5534846d9c9228c3d8d800/tenor.gif",
          "https://media.tenor.com/images/d481410e9b04c08ee49e2fb518e572ed/tenor.gif",
          "https://media.tenor.com/images/d3cde0fb37f4b1f393a305311741a34b/tenor.gif",
          "https://media.tenor.com/images/b86237502c66771c28ba622804f47e55/tenor.gif",
          "https://media.tenor.com/images/f3baf45d1b546aa8d7840ace957752a2/tenor.gif",
          
          ];
          
          
          const embed = new Discord.MessageEmbed()
          
          .setTitle(`${message.author.username} está celebrando`)
          .setColor('RANDOM')
          .setImage( gif[Math.floor(Math.random() * gif.length)] )
          .setFooter('Rigby Bot');
          
           message.channel.send(embed);
           return
//Bailar
      }if (command === 'bailar') {
        let gif = [
  
          "https://media.tenor.com/images/b058c40fafe093fa3d73ec3309f7c93a/tenor.gif",
          "https://media.tenor.com/images/d3cde0fb37f4b1f393a305311741a34b/tenor.gif",
          "https://media.tenor.com/images/63e0ff2934c3ffb7d1594181506857ea/tenor.gif",
          "https://media.tenor.com/images/1089d005991f6a961d52ea93f304222a/tenor.gif",
          "https://media.tenor.com/images/0d6845ff705148ac25abfa80ed565a61/tenor.gif",
          "https://media.tenor.com/images/2c4e493d9b8d112c4204331d14cfe652/tenor.gif",
          "https://media.tenor.com/images/0e550698edda5ca65f9054615fe5c8a4/tenor.gif",
          "https://media.tenor.com/images/04c9d8afa4fc232bf3ab30ab71f97642/tenor.gif",
          "https://media.tenor.com/images/4b66dd8c2a50213dd1fdac36c3d199d6/tenor.gif",
          "https://media.tenor.com/images/4cf76c18175c6d3e0e4ede72af613a21/tenor.gif",
          "https://media.tenor.com/images/1b0eaa13e8cb122379a1e169cf44ba0f/tenor.gif",
          "https://media.tenor.com/images/92d4360f72f8ba710b5924bcaa5f8b26/tenor.gif",
            
          ];
          
          
          const embed = new Discord.MessageEmbed()
          
          .setTitle(`${message.author.username} está haciendo un baile increíble`)
          .setColor('RANDOM')
          .setImage( gif[Math.floor(Math.random() * gif.length)] )
          .setFooter('Rigby Bot');
          
           message.channel.send(embed);
           return
      }
      }
  });
//snipe base
client.on('messageDelete', message =>{
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  })
})

client.on('guildCreate', async gData => {
  db.collection('guilds').doc(dData.id).set({
    'guildID' : gData.id,
    'guildName' : gData.name,
    'guildOwner' : gData.owner.user.username,
    'guildOwnerID'  : gData.owner.id,
    'guildMemberCount' : gData.memberCount,
    'prefix' : 'r!'
  });
});


client.login(TOKEN);