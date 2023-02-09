var map = L.map('map').setView([37.75, -122.4], 11);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
  minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

// load GeoJSON data from Github file
$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function(data){
    var coordinatesOnly = data.features.map(function(feature) {
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });
      var heat = L.heatLayer(coordinatesOnly).addTo(map);
  });  
