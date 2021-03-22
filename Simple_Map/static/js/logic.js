//add console.log to check to see if code is working.
console.log("working");

//create the map object with a  center and zoom level.
let map = L.map("mapid").setView([34.0522, -118.2437],14);

//add a marker to the map for los angeles, california
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);

//create the tile layer that will be the bakcground of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//then add our graymap tile layer to the map
streets.addTo(map);