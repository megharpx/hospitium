mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFubmFoYmlyZCIsImEiOiJjbDd3cDh0cm4wbnkwM29veDFvcTJrbjNnIn0.bWvaOTTnL48zTpPIMCzeNQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
  projection: "globe", // display the map as a 3D globe
});
map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});
console.log(map);
