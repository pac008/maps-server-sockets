const MarkerList = require("./marker-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.markers = new MarkerList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      // enviar markers
      socket.emit("markers", this.markers.markers);
      // new marker
      socket.on("new-marker", (marker) => {
        const markerAdded = this.markers.addMarker(marker);
        socket.broadcast.emit("marker-added", markerAdded);
      });
      
      socket.on("marker-in-moving", (markerInMoving) => {
        const markerMoved = this.markers.updateMarker(markerInMoving);
        // callback(markerAdded);
        socket.broadcast.emit("marker-moved", markerMoved);
      });

      // marker updated
    });
  }
}

module.exports = Sockets;
