class MarkerList {
  constructor() {
    this.markers = {};
  }

  addMarker(marker) {
    this.markers[marker.id] = marker;
    return marker;
  }

  deleteMarker(id) {
    delete this.markers[id];
  }

  updateMarker(marker) {
    this.markers[marker.id] = marker;
    return marker;
  }
}

module.exports = MarkerList;
