EIR.define('MapComponent', ['jQuery', 'Response'], function($, Response) {

  'use strict';
  //global Vars
  var map = {};
  var marker = [];
  var place1 = new google.maps.LatLng(32.124871, 34.803939);

  // constructor
  function MapComponent($el) {
    console.log('*** MapComponent ***');
    google.maps.event.addDomListener(window, 'load', this.initialize);
  };

  MapComponent.prototype.initialize = function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(32.124871, 34.803939),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROAD,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      disableDefaultUI: true
    };
    map = new google.maps.Map(mapCanvas, mapOptions);

    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

    MapComponent.prototype.addMarker(place1);
  };

  MapComponent.prototype.addMarker = function addMarker(position) {
    marker.push(new google.maps.Marker({
      position: position,
      map: map,
      draggable: false,
    }));
  };

  // register as view
  this.registerView('MapComponent', MapComponent);
  //
  // always return constructor if you define a 'class'
  return MapComponent;
});
