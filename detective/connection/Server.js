//const net = require('net');
const handleConnection = socket => {
    console.log('Cliente conectado');
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    socket.write("Player " + socket.name + " conectado com sucesso\n");

    socket.on('data', data => {
        console.log(data.toString());
    })
    
    socket.on('end', () => {
        console.log('cliente desconectado')
    });
};

const server = TcpSocket.createServer(handleConnection);
server.listen(29298, '127.0.0.1');