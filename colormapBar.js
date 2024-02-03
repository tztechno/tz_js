var overlay_eq_points = L.geoJSON(eq_points, {
    onEachFeature: popUpFunctionNew,
    pointToLayer: function (feature, latlng) {
        // Choose marker color based on magnitude
        var magnitude = feature.properties.mag;
        var markerColor = getMarkerColor(magnitude);

        // Create and return the circle marker
        return L.circleMarker(latlng, {
            radius: 12,
            fillColor: markerColor,
            color: markerColor,
            weight: 1,
            opacity: 1,
            fillOpacity: 0.2
        }); 
    }
}).addTo(mymap);

var colormapBar = L.control({ position: 'bottomleft' });

colormapBar.onAdd = function () {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = "<div id='colormapBar' style='width: 200px; height: 20px; background: linear-gradient(to right, yellow, red );'></div>";
    return div;
};

colormapBar.addTo(mymap);
