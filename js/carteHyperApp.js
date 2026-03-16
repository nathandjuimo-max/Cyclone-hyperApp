
//partie consernant la carte du menue réparateur HyperApp
let userLat;
let userLng;

var map = L.map('carte').setView([3.848, 11.502], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap'
}).addTo(map);

const seLocaliser = document.querySelector('#se-localiser');

seLocaliser.addEventListener('click', function(){

map.locate({setView:true,maxZoom:16});

map.on('locationfound', function(e){

userLat = e.latlng.lat;
userLng = e.latlng.lng;

L.marker(e.latlng)
.addTo(map)
.bindPopup("Vous êtes ici")
.openPopup();

});

});

const reparateursLocation = [

{
nom:"Jean Michel",
metier:"Téléphone",
lat:3.848,
lng:11.502
},

{
nom:"Pierre",
metier:"Télévision",
lat:3.850,
lng:11.510
},

{
nom:"Ali",
metier:"Frigo",
lat:3.845,
lng:11.498
}

];

reparateurs.forEach(function(rep){

let marker = L.marker([rep.lat, rep.lng])
.addTo(map)
.bindPopup(`<b>${rep.nom}</b><br>${rep.metier}`);

marker.on('click', function(){

map.setView([rep.lat, rep.lng], 16);

if(userLat && userLng){

L.Routing.control({
waypoints:[
L.latLng(userLat,userLng),
L.latLng(rep.lat,rep.lng)
],
routeWhileDragging:false
}).addTo(map);

}

});

});