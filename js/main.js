// function initmap(){
//     const loc = {lat: 47.912182, lng: 106.868260};
//     const map = new google.maps.map
//     (document.querySelector('.map'),{
//         zoom: 14,
//         center: loc
//     });

//     const marker = new google.maps.Marker({position:loc, map:map});
// }

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.912182, lng: 106.86826 },
    zoom: 8,
  });
}
