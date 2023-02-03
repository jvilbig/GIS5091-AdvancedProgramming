require(["esri/WebMap", "esri/views/MapView"], function (WebMap, MapView) {
        var webmap = new WebMap({
          portalItem:{
             id:"50f9b8447bd84d56a33182c28b7fe2a5"
          }
        });

        var view = new MapView({
          container: "viewDiv",
          map: webmap,
          zoom: 4,
          center: [-90, 40], // longitude, latitude
        });
});