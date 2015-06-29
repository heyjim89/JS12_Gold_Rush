$('.topo').on("click", function(event) {


	var x = event.pageX;
	var y = event.pageY;

	var pin = []

	var note = prompt('What note do you want to add?');

	$('.parent').append("<textarea readonly class='note'>" + note + "</textarea>");

	pin.push(x);
	pin.push(y);
	console.log(pin);

	var pinX = pin[0] - 17;
	var pinY = pin[1] - 30;

	var textX = pinX + 40;

	var textY = pinY;


	$('.parent').append("<div class='marker'></div>");
	$('.marker').css({
		'visibility': 'visible',
		'top': pinY,
		'left': pinX

	});

	$('.marker').on("mouseover", function(event) {
		$('.note').css({
			'visibility': 'visible',
			'top': textY,
			'left': textX

		});

	});
	$('.marker').on("mouseout", function(event) {
		$('.note').css({
			'visibility': 'hidden',
			'top': textY,
			'left': textX

		});

	});

	$('.marker').on("click", function(event) {
		$('.marker').css({
			'visibility': 'hidden'
		});

	});

});

// 	   __________  ____  ________    ______   __  ______    ____  _____
// 	  / ____/ __ \/ __ \/ ____/ /   / ____/  /  |/  /   |  / __ \/ ___/
// 	 / / __/ / / / / / / / __/ /   / __/    / /|_/ / /| | / /_/ /\__ \ 
// 	/ /_/ / /_/ / /_/ / /_/ / /___/ /___   / /  / / ___ |/ ____/___/ / 
// 	\____/\____/\____/\____/_____/_____/  /_/  /_/_/  |_/_/    /____/  
// 	                                                                   
var map;
var markers = [];

function initialize() {
  var haightAshbury = new google.maps.LatLng(40,-105);
  var mapOptions = {
    zoom: 12,
    center: haightAshbury,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // This event listener will call addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng);
  });

  // Adds a marker at the center of the map.
  addMarker(haightAshbury);
}

// Add a marker to the map and push to the array.
function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

google.maps.event.addDomListener(window, 'load', initialize);
