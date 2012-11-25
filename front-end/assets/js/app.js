$(document).ready(function(){
  
  // Setup the map
  var element = document.getElementById("map");
  var geocoder = new google.maps.Geocoder();
  var currentPopover = null;

  var dataLookup = {};
  for (var i = data.length - 1; i >= 0; i--) {
		dataLookup[data[i].name] = data[i];
  }

	var map = new google.maps.Map(element, {
		center: new google.maps.LatLng(55, -4.5),
		zoom: 6,
		disableDefaultUI: true,
		mapTypeControl: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		mapTypeId: "OSM",
		mapTypeControlOptions: {
			mapTypeIds: ["OSM", google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.SATELLITE]
		}
	});

	map.mapTypes.set("OSM", new google.maps.ImageMapType({
		getTileUrl: function(coord, zoom) {
			return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
		},
		tileSize: new google.maps.Size(256, 256),
		name: "OpenStreetMap",
		maxZoom: 18
	}));

	// Import the Fusion Table for Constituency Boundaries
	var consituencyBoundaries = new google.maps.FusionTablesLayer({
		query: {
			select: "*",
			from: "1m139hcaNfw08TQVMRn-cp4pbCf1yPUdG2cSHuWY"
		},
		styles: [{
			polygonOptions: {
				fillOpacity: -0.1,
				fillColor: "#bb0000",
				strokeWeight: 1.0,
				strokeOpacity: 0.5,
				strokeColor: "#AD1F00"
			}
		}]
	});
	consituencyBoundaries.setMap(null);

	// Markers for each Constituency
	var pins = [];
	function addMarker(data) {
		var source   = $("#const").html();
		var template = Handlebars.compile(source);

		data.mpAttendance = parseFloat(data.mpAttendance) * 100;
		data.mpRebellion = parseFloat(data.mpRebellion) * 100

		var content = template(data);
		var marker = new google.maps.Marker({
			map: null,
			position: new google.maps.LatLng(data.lat, data.lon),
			title: data.name
		});
		pins.push(marker);
		var infowindow = new google.maps.InfoWindow({
			content: content
		});
		google.maps.event.addListener(marker, 'click', function() {
			if (currentPopover) {
				currentPopover.close();
			}
			infowindow.open(map,marker);
			currentPopover = infowindow;
		});
	}

	function addToHeatmap(heatmap, data, weight) {
		heatmap.push({
			location: new google.maps.LatLng(parseFloat(data.lat), parseFloat(data.lon)),
			weight: parseFloat(weight)
		});
	}

	var heatmapPopulationData = [];
	var heatmapInequalityData = [];
	
	for (var i = data.length - 1; i >= 0; i--) {
		addMarker(data[i]);
		addToHeatmap(heatmapPopulationData, data[i], data[i].population);
	}

	var heatmapPopulation = new google.maps.visualization.HeatmapLayer({
		data: heatmapPopulationData
	});
	heatmapPopulation.setMap(null);

	function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
	    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	// generate the polygons for Constituency
	function genPolys() {
		for (var i = 0; i < consts.length; i++) {
			if (!consts[i].name || !dataLookup[consts[i].name] || !dataLookup[consts[i].name].screwedness) {
				continue;
			}
			if (!parseFloat(dataLookup[consts[i].name].screwedness)) {
				continue;
			}
			var coords = [];
			for (var j = 0; j < consts[i].geometry.length; j++) {
				var point = new google.maps.LatLng(consts[i].geometry[j].lng, consts[i].geometry[j].lat);
				coords.push(point);
			}
			var s = parseFloat(dataLookup[consts[i].name].screwedness);
			var red = (Math.sin(s)) * 255;
			var green = (Math.cos(s)) * 255;
			var rgb = rgbToHex(parseInt(red), parseInt(green), 0);
			var poly = new google.maps.Polygon({
				paths: coords,
				strokeColor: "#000000",
				strokeOpacity: 1.0,
				strokeWeight: 1,
				fillColor: rgb,
				fillOpacity: 0.8
			});
			heatmapInequalityData.push(poly);
			poly.setMap(map);
		}
	}
	genPolys();

	console.log('Complete poly generation for inequality heatmap');

	var pinsOn = false;
	$('#pins').click(function() {
		if (pinsOn) {
			for (var i = pins.length - 1; i >= 0; i--) {
				pins[i].setMap(null);
			}
		} else {
			for (var j = pins.length - 1; j >= 0; j--) {
				pins[j].setMap(map);
			}
		}
		pinsOn = !pinsOn;
	});

	var boundariesOn = false;
	$('#boundaries').click(function() {
		if (boundariesOn) {
			consituencyBoundaries.setMap(null);
		} else {
			consituencyBoundaries.setMap(map);
		}
		boundariesOn = !boundariesOn;
	});

	var populationOn = false;
	$('#population').click(function() {
		if (populationOn) {
			heatmapPopulation.setMap(null);
		} else {
			heatmapPopulation.setMap(map);
		}
		populationOn = !populationOn;
	});

	var inequalityOn = true;
	$('#inequality').click(function() {
		if (inequalityOn) {
			for (var i = heatmapInequalityData.length - 1; i >= 0; i--) {
				heatmapInequalityData[i].setMap(null);
			}
		} else {
			for (var i = heatmapInequalityData.length - 1; i >= 0; i--) {
				heatmapInequalityData[i].setMap(map);
			}
		}
		inequalityOn = !inequalityOn;
	});

});