 require([
        "esri/Map",
        "esri/layers/CSVLayer",
        "esri/views/MapView",
        "esri/widgets/Legend"
      ], (Map, CSVLayer, MapView, Legend) => {
        const url =
"https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";

   const template = {
   title: "Crime committed at {ILEADSStreet}"
};

        const renderer = {
          type: "heatmap",
          colorStops: [
            { color: "rgba(63, 40, 102, 0)", ratio: 0 },
            { color: "#0000FF", ratio: 0.25 },
            { color: "#8B1DFE", ratio: 0.5 },
            { color: "#FF9831", ratio: 0.75 },
            // { color: "#AA4A44", ratio: 0.8 },
            // { color: "#C41E3A", ratio: 0.95 },
            // { color: "#800020", ratio: 0.98 },
            { color: "#D2042D", ratio: 0.999 },
            { color: "#880808", ratio: 1 }
          ],
          maxDensity: 0.01,
          minDensity: 0
        };

        const layer = new CSVLayer({
        url: url,
        title: "St. Louis Crime Heatmap",
        copyright: "St. Louis Police Department",
		    latitudeField:"Lat",
        longitudeField:"Lon",
		    popupTemplate: template,
		    renderer: renderer
        });

        const map = new Map({
          basemap: "gray-vector",
          layers: [layer]
        });

        const view = new MapView({
          container: "viewDiv",
          center: [-90.3, 38.65],
          zoom: 9,
          map: map
        });

        view.ui.add(
          new Legend({
            view: view
          }),
          "bottom-left"
        );
      });