var map = L.map('map').setView([38.6251, -90.1868], 11);

L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Icon = L.Icon.extend({
    options: {
       iconSize:     [40, 40],
       iconAnchor:   [10, 30],
    }
});

var jvIcon = new Icon({
    iconUrl: 'https://www.creativefabrica.com/wp-content/uploads/2019/06/Bike-icon-by-marco.livolsi2014-3-580x386.jpg',
})

// Site #1 - Cahokia Mounds
var marker1 = L.marker([38.6551, -90.0618], {icon: jvIcon}).addTo(map);
marker1.bindPopup("<b><i>Justin's Favorite StL Places (1) </b></i><br>Cahokia Mounds").openPopup();

// Site #2 - Wainwright Building
var marker2 = L.marker([38.6272, -90.1920], {icon: jvIcon}).addTo(map);
marker2.bindPopup("<b><i>Justin's Favorite StL Places (2)</b></i><br>The Wainwright Building").openPopup();

// Site #3 - Castelwood
var marker3 = L.marker([38.5526, -90.5435], {icon: jvIcon}).addTo(map);
marker3.bindPopup("<b><i>Justin's Favorite StL Places (3) </b></i><br>Castelwood State Park").openPopup();

// Site #4 - Art Hill
var marker4 = L.marker([38.6403, -90.2937], {icon: jvIcon}).addTo(map);
marker4.bindPopup("<b><i>Justin's Favorite StL Places (4) </b></i><br>Forest Park's Art Hill").openPopup();

// Site #5 - Amsterdam Tavern
var marker5 = L.marker([38.6019, -90.2618], {icon: jvIcon}).addTo(map);
marker5.bindPopup("<b><i>Justin's Favorite StL Places (5) </b></i><br>The Amsterdam Tavern").openPopup();
