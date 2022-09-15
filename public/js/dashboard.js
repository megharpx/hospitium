const addressDisplay = document.querySelector("#address-container");
const mapDisplay = document.querySelector("#new-post-map-container");
const latlonDisplay = document.querySelector("#latlon-display");

var addressSelect = false;
var mapClickSelect = false;
var myLocationSelect = false;

// if entering address content will hide
function addressDisplayHandler() {
  mapDisplay.style = "visibility: hidden; max-height: 0;";
  latlonDisplay.style = "visibility: hidden; max-height: 0;";

  addressDisplay.style.removeProperty("visibility");
  addressDisplay.style.removeProperty("max-height");

  addressSelect = true;
  mapClickSelect = false;
  myLocationSelect = false;
}

// if clicked content will hide
function mapDisplayHandler() {
  addressDisplay.style = "visibility: hidden; max-height: 0;";

  mapDisplay.style.removeProperty("visibility");
  mapDisplay.style.removeProperty("max-height");
  latlonDisplay.style.removeProperty("visibility");
  latlonDisplay.style.removeProperty("max-height");

  addressSelect = false;
  mapClickSelect = true;
  myLocationSelect = false;
}

// if clicked this will hide content
function myLocationHandler() {
  addressDisplay.style = "visibility: hidden; max-height: 0;";
  mapDisplay.style = "visibility: hidden; max-height: 0;";
  latlonDisplay.style = "visibility: hidden; max-height: 0;";

  addressSelect = false;
  mapClickSelect = false;
  myLocationSelect = true;
}

// function to get post coordinates
async function getPostCoords() {
  switch (document.querySelector("input[name='location']:checked").value) {
    case "Address":
      let address = document.querySelector("#address-input").value;
      let city = document.querySelector("#city-input").value;
      let state = document.querySelector("#state-select").value;

      console.log(address, city, state);

      if (address === null || city === null || state === null) {
        alert("Please fill out all fields!");
        break;
      } else {
        return await geocodeAddress(address, city, state);
      }
    case "Map click":
      makePostRequest(
        document.querySelector("#lat-display").textContent,
        document.querySelector("#lon-display").textContent
      );
    case "Use my location":
      var position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      makePostRequest(position.coords.latitude, position.coords.longitude);

    default:
      return null;
  }
}

async function geocodeAddress(address, city, state) {
  var apiUrl =
    "https://www.mapquestapi.com/geocoding/v1/address?key=4McX00KhLME08AowOXfF1mwJH3xHU01N&location=" +
    address.trim().replaceAll(" ", ",") +
    "," +
    city +
    "," +
    state;

  console.log(apiUrl);

  await fetch(apiUrl).then(function (response) {
    if (response.ok) {
      console.log("Connection Successful");
      response.json().then(function (data) {
        console.log(data.results[0].locations);
        console.log(
          "address latlong: " + data.results[0].locations[0].latLng.lat,
          data.results[0].locations[0].latLng.lng
        );
        makePostRequest(
          data.results[0].locations[0].latLng.lat,
          data.results[0].locations[0].latLng.lng
        );
      });
    }
  });
}

function getPos(pos) {
  return {
    lat: pos.coords.latitude,
    lon: pos.coords.longitude,
  };
}

function getPosError(err) {
  alert("You need to share your location!");
  return null;
}

async function newFormHandler(event) {
  event.preventDefault();

  //   Get coordinates fpr post
  await getPostCoords();
}

// make post request with latitude and longitude location
async function makePostRequest(post_lat, post_lon) {
  console.log("final callback: " + post_lat, post_lon);

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector(
    'textarea[name="post-content"]'
  ).value;
  const hospital = document.querySelector('input[name="hospital"]').value;

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      post_content,
      hospital,
      post_lat,
      post_lon,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      console.log(response);
      document.location.replace("/dashboard");
    } else {
      console.log(response.statusText);
    }
  });
}

// EVENT LISTENERS
document
  .querySelector("#address")
  .addEventListener("click", addressDisplayHandler);

document
  .querySelector("#map-click")
  .addEventListener("click", mapDisplayHandler);

document
  .querySelector("#your-location")
  .addEventListener("click", myLocationHandler);

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
