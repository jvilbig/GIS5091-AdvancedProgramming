require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/config",
      "esri/core/urlUtils",
      "dojo/domReady!"
    ], function(
      Map,
      CSVLayer,
      MapView,
      esriConfig,
      urlUtils
    ) {

var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";
     esriConfig.request.corsEnabledServers.push('https://rawgit.com');

      // Paste the url into a browser's address bar to download and view the attributes
      // in the CSV file. These attributes include:
      // * mag - magnitude
      // * type - earthquake or other event such as nuclear test
      // * place - location of the event
      // * time - the time of the event

        const template = {
          title: "A crime occurred here.",
        }

        const csvLayer = new CSVLayer({
          url: url,
          copyright: "City of St. Louis",
          popupTemplate: template
        });
      
        var symbol = {
          type: "simple-marker", 
          style: "triangle",
          color: "orange"
        };

      csvLayer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: symbol
      };

      var map = new Map({
        basemap: "gray",
        layers: [csvLayer]
      });

      var view = new MapView({
        container: "viewDiv",
        center: [-90.32, 38.63],
        zoom: 10,
        map: map
      });

    });