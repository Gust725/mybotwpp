
const qrcode = require('qrcode-terminal');

//Crea una sesión con whatsapp-web y la guarda localmente para autenticarse solo una vez por QR
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

//Genera el código qr para conectarse a whatsapp-web
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on('ready', () => {
    console.log('Conexion exitosa');
});

//Aquí sucede la magia, escucha los mensajes y aquí es donde se manipula lo que queremos que haga el bot
client.on('message', message => {
    console.log(message.body);
	if(message.body === '1') {
		client.sendMessage(message.from, 'Respuesta 1');
	}
    if(message.body === '2') {
		client.sendMessage(message.from, 'Respuesta 2');
	}
    if(message.body === '3') {
		client.sendMessage(message.from, 'Respuesta 3');
	}
});

client.initialize();