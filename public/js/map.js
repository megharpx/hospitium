var map = null;
const mapDivEl = document.querySelector("#map");

// verify geolocation is supported
function getLocation() {
  // prompt for location and generate map if supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition, getDefaultPosition, {
      timeout: 250,
    });
  } else {
    //  hardcode location to salt lake city as default
    getMap(40.785701, -111.876183);
    map.on("click", mapClick);
  }
}

// gets user position
function getPosition(position) {
  console.log(
    "Your Location: " +
      position.coords.latitude +
      ", " +
      position.coords.longitude
  );
  //   generate map using user position
  getMap(position.coords.latitude, position.coords.longitude);
  map.on("click", mapClick);
}

// default function location if user wishes not to sahre location
function getDefaultPosition() {
  getMap(40.785701, -111.876183);
  map.on("click", mapClick);
}

// generate map func
function getMap(lat, lon) {
  if (map === null) {
    map = L.map("map").setView([lat, lon], 13);
    console.log(map);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 21,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiaGFubmFoYmlyZCIsImEiOiJjbDd3cDh0cm4wbnkwM29veDFvcTJrbjNnIn0.bWvaOTTnL48zTpPIMCzeNQ",
      }
    ).addTo(map);

    L.marker([lat, lon]).addTo(map);
  } else {
    map.setView([lat, lon], 13);

    L.marker([lat, lon]).addTo(map);
  }
}

// pop ups test
function mapPost(post) {
  // add marker on the map
  new L.marker([post.post_lat, post.post_lon], { icon: renderMapFlag() })
    .addTo(map)
    .bindPopup(renderPostPopup(post), {
      autoClose: false,
    });
}

function renderMapFlag() {
  console.log("rendering...");

  var MapFlag = L.Icon.extend({
    options: {
      iconUrl: "/images/map-flag.png",
      iconSize: [40, 50],
      iconAnchor: [25, 55],
      popupAnchor: [-3, -76],
    },
  });

  return new MapFlag();
}

function renderPostPopup(post) {
  if (post.hospital) {
    return `
    <div class="post-popup">
      <a class="popup-link" href="/post/${post.id}"><h2>${post.title}</h2></a>
      <p class="meta">At: ${post.hospital}</p>
          <p> ${post.post_content}</p>
    </div>`;
  } else {
    return `
  <div class="post-popup">
    <a class="popup-link" href="/post/${post.id}"><h2>${post.title}</h2></a>
        <p> ${post.post_content}</p>
  </div>`;
  }
}

var mapClick = function (e) {
  console.log("Map was clicked");

  // upon mouse click, get latititude and longitude coordinates
  let lat = e.latlng.lat.toFixed(7);
  let lon = e.latlng.lng.toFixed(7);

  // upon click, map moves and zooms
  map.flyTo([parseFloat(lat) + 0.009, parseFloat(lon) + 0.0005], 14);

  let latDisplay = document.querySelector("#lat-display");
  let lonDisplay = document.querySelector("#lon-display");

  // when clicking the map, lat/lon will match the lat/lon displayed
  if (latDisplay && lonDisplay) {
    let icon = document.querySelector('img[src="/images/map-flag.png"]');

    if (icon) {
      icon.remove();
    }

    // add flag
    L.marker([lat, lon], { icon: renderMapFlag() }).addTo(map);

    // set latitude and longitude variables
    latDisplay.textContent = lat;
    lonDisplay.textContent = lon;
  }
  console.log(lat, lon);
};

getLocation();
