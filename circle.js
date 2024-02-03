const circle = (g, x, y, r) => {
  g.beginPath();
  g.arc(x, y, r, 0, 2 * Math.PI);
  g.closePath();
  g.fill();
};
