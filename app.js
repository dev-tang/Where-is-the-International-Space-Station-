//GLOBAL

const mymap = L.map('issMap').setView([0, 0], 1);
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

//ISSMarker
const marker = L.marker([0, 0]).addTo(mymap);

//Functions

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution:
		'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoicG90YXRvYnVybnMiLCJhIjoiY2thYWg5aG90MDIxYjJzbzEzcjV5emJydiJ9.JQxucnVy4mrRmzcLH0K0bw',
}).addTo(mymap);

async function getISS() {
	const response = await fetch(api_url); //fetching api
	const data = await response.json(); //convert response to json
	const { latitude, longitude } = data; //javascript deconstruct

	//Setting the Market
	marker.setLatLng([latitude, longitude]);

	//DOM
	document.getElementById('lat').textContent = latitude;
	document.getElementById('long').textContent = longitude;
}

//Calling Functions

getISS();
