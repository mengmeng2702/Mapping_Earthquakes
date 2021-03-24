//add console.log to check to see if code is working.
console.log("working");

//create the tile layer that will be the bakcground of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    opacity: 0.8,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create a base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

//create the map object with center, zoom level and default layer.
let map = L.map("mapid",{
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

//Pass our map layers into out layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection",
//         "features":[{
//             "type":"Feature",
//             "properties":{
//                 "id":"3469",
//                 "name":"San Francisco International Airport",
//                 "city":"San Francisco",
//                 "country":"United States",
//                 "faa":"SFO",
//                 "icao":"KSFO",
//                 "alt":"13",
//                 "tz-offset":"-8",
//                 "dst":"A",
//                 "tz":"America/Los_Angeles"},
//             "geometry":{
//                 "type":"Point",
//                 "coordinates":[-122.375,37.61899948120117]}}
// ]};
// //grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport,{
//     //we turn each feature into a marker on the map
//     pointToLayer: function(feature,latlng){
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>"+feature.properties.name + "</h2><hr><h3>"+feature.properties.city+", "+ feature.properties.country);
//     }
// }).addTo(map);

// //grabbing our GeoJSON data
// L.geoJSON(sanFranAirport,{
//     onEachFeature: function(feature,layer){
//         console.log(layer);
//         layer.bindPopup();
//     }
// }).addTo(map);


//accessing the toronto neighborhoods GeoJSON URL
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

//create a style for the lines
let myStyle = {
    color: "blue",
    weight: 1,
    fillColor: "yellow"
}

//grabbing our GeoJSON data
d3.json(earthquakeData).then(function(data){
    console.log(data);
    //creating a GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);

})
