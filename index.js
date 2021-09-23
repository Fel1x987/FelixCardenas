var mymap = L.map("mapid").setView(
  [21.152364203854884, -101.71115227036523],
  16
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

//var salle = L.marker([21.15223412617155, -101.7113883047542]).addTo(mymap);

// function onEachFeature(feature, layer) {
//   var popupContent = "Soy un " + feature.geometry.type + " en la salle";

//   if (feature.properties && feature.properties.popupContent) {
//     popupContent += feature.properties.popupContent;
//   }

//   layer.bindPopup(popupContent);
// }

// L.geoJSON(lasalle, {
//   filter: function (feature, layer) {
//     if (feature.properties) {
//       return true;
//     }
//   },
//   onEachFeature: onEachFeature,
// }).addTo(mymap);

// var marker = L.marker([21.15223412617155, -101.7113883047542])
//   .addTo(mymap)
//   .bindPopup("Holi");

// function onMapClick(e) {
//   alert("haz dado click en: " + e.latlng); 
// }

// mymap.on("click", onMapClick);  ctrl + k c
var array = [];
var lines;
function onMapClick(e) {
    L.popup().setLatLng(e.latlng).setContent("Haz dado click en " + e.latlng.toString()).openOn(mymap); //Aqui estamos diciendo que se pondra un popoup en las coordenadas, ponga el texto y lo ponga en el mapa
    //alert("haz dado click en: " + e.latlng); 

    var marker = L.marker([e.latlng.lat, e.latlng.lng])
    .addTo(mymap)
    .bindPopup("Haz dado click en " + e.latlng.toString());
    let arreglodevic = [e.latlng.lat, e.latlng.lng];
    array.push(arreglodevic);
    
    // if (array.length == 2){
    //   //alert("HOLA");
    //   var polygon = L.polygon(
    //     array
    // ).addTo(mymap);} 
}

function addLines(e){
    for(i in mymap._layers){
      if(mymap._layers[i._path != undefined]){
        try {
          mymap.removeLayer(mymap._layers[i]);
        } catch (e) {
          console.log("HOLA " + e)
        }
      }
    }

    if (lines){
      mymap.removeLayer(lines);
    }
    // //alert("HOLA");
    // console.log(mymap);
    // if(lines){
    //   mymap.removeLayer(mymap._layers[1]);
    // } 
    //console.log( array);
    //console.log(array[array.length-1])
    //console.log(array[array.length-2])
     lines = L.polygon([
       array[array.length-1], 
       array[array.length-2] 
     ]).addTo(mymap);
    
}

mymap.on("click", onMapClick);

mymap.on("dblclick", addLines)

mymap.doubleClickZoom.disable();
