

function popUpFunctionNew(feature, layer) {
   var popupContent = "<b>Date: </b>"+ new Date(feature.properties.time).toLocaleString() +
   "<br><b>Location: </b>"+ feature.properties.place +
   "<br><b>Magnitude: </b>"+ feature.properties.mag +
   "<br><b>Depth: </b>"+ feature.geometry.coordinates[2] + " km" +
   "<br><b>URL: </b><a href='" + feature.properties.url + "' target='_blank'>More Info</a>";
   layer.bindPopup(popupContent);
  }
