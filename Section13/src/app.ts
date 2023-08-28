import * as L from "leaflet";
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;


const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;
  console.log(enteredAddress);

  axios.get(`https://geocode.maps.co/search?q=${encodeURI(enteredAddress)}`)
    .then(response => {
      console.log(response);

      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      console.log(typeof lat);
      console.log(typeof lon);
      map.setView([lat, lon], 13);

    })
    .catch(err => console.log(err))

}

form.addEventListener("submit", searchAddressHandler);

