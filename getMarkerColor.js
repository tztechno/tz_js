function getMarkerColor(magnitude) {
    // Normalize magnitude to be in the range [0, 1]
    var normalizedMagnitude;

    if (magnitude <= 5) {
	normalizedMagnitude = 0;
    } else if (magnitude >= 8) {
	normalizedMagnitude = 1;
    } else {
	normalizedMagnitude = (magnitude - 5) / 3;
    }

    // Interpolate color based on the normalized magnitude
    var interpolatedColor = interpolateColor(normalizedMagnitude, { r: 255, g: 255, b: 0 }, { r: 255, g: 0, b: 0 });

    return rgbToHex(interpolatedColor.r, interpolatedColor.g, interpolatedColor.b);
}
