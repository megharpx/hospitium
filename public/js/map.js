var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFubmFoYmlyZCIsImEiOiJjbDd3cDh0cm4wbnkwM29veDFvcTJrbjNnIn0.bWvaOTTnL48zTpPIMCzeNQ";
var map = new mapboxgl.Map({
  container: "map-click",
  style: "mapbox://styles/mapbox/streets-v11",
});
