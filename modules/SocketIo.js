var socketio = require('socket.io');

exports.socketIoListen = function(server) {
  // Socket.IO
  var io = socketio.listen(server);
  io.set('log level', 1);
  io.set('transports', [ 'websocket' ]);

  // 接続
  io.sockets.on('connection', function(socket) {
    //var address = socket.handshake.address.address;
    socket.on('send', function(event) {
      var message = event.message;
      socket.emit('push', message);
      socket.broadcast.emit('push' , message);
    });
    // 切断
    socket.on("disconnect", function() {
    
    });
  });
}
