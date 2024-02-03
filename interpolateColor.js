// Function to interpolate color between two colors
function interpolateColor(factor, color1, color2) {
    var r = Math.round(color1.r + factor * (color2.r - color1.r));
    var g = Math.round(color1.g + factor * (color2.g - color1.g));
    var b = Math.round(color1.b + factor * (color2.b - color1.b));

    return { r: r, g: g, b: b };
}
