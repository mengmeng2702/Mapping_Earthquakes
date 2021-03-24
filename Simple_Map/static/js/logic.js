//add console.log to check to see if code is working.
console.log("working");

//create the tile layer that will be the bakcground of our map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    opacity: 0.8,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//create a base layer that holds both maps
let baseMaps = {
    Light: light,
    Dark: dark
};

//create the map object with center, zoom level and default layer.
let map = L.map("mapid",{
    center: [44.0,-80.0],
    zoom: 2,
    layers: [dark]
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


//accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/mengmeng2702/Mapping_Earthquakes/main/torontoRoutes.json"

//create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight:2
}

//grabbing our GeoJSON data
d3.json(torontoData).then(function(data){
    console.log(data);
    //creating a GeoJSON layer with the retrieved data
    L.geoJson(data,{
        style: myStyle,
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h3>Airline: "+feature.properties.airline+"</h3><hr><h3>Destination: "+feature.properties.dst);
        }
        // "color": "light yellow",
        // "weight": 2
    }).addTo(map);

})
