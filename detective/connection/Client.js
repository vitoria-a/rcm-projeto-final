const net = require('net');
import TcpSocket from 'react-native-tcp-socket';


const client = TcpSocket.createConnection();
client.connect(29298, '127.0.0.1', () => {
    console.log('Conectado ao servidor');
    client.write('Olá server <3');

    client.on('data', function(data) {
        console.log('Received: ' + data);
    });
    
    client.on('end', () => {
        console.log('Connection closed');
    });
})