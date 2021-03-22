//add console.log to check to see if code is working.
console.log("working");

//create the map object with a  center and zoom level.
let map = L.map("mapid").setView([36.1733, -96.5400],5);

//coordinates for each point to be used in the line.
let line =[
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

//create a polyline using the line coordinates and make the line red.
L.polyline(line,{
    color: "blue",
    smoothFactor: 0.5,
    weight: 4,
    dashArray: "10",
    dashOffset:"10",
    opacity: 0.5
}).addTo(map);


//create the tile layer that will be the bakcground of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    opacity: 0.5,
    accessToken: API_KEY
});

//then add our graymap tile layer to the map
streets.addTo(map);