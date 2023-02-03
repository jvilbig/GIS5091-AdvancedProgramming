require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "osm"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 4,
          center: [-90, 40],
        });

        /********************
         * Add feature layer
         ********************/

// National Park Locations
var featureLayer_1 = new FeatureLayer({
  url: "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Land_Resources_Division_Boundary_and_Tract_Data_Service/FeatureServer"
});

map.add(featureLayer_1);

// North American Rail Lines
// NOTE - this was the original layer I used for my App 1, but the url is broken. Thus, I used the Amtrak layer instead.
var featureLayer_2 = new FeatureLayer({
  url: "https://geo.dot.gov/server/rest/services/NTAD/North_American_Rail_Lines/MapServer/0"
});

// Amtrak routes in USA
var featureLayer_3 = new FeatureLayer({ url:"https://geo.dot.gov/mapping/rest/services/NTAD/Amtrak_Routes/MapServer"
  });
  
map.add(featureLayer_3);
});