const drawWorld = (g, engine) => {
  g.setColor(0, 0, 0);
  const bodies = Matter.Composite.allBodies(engine.world);
  for (const body of bodies) {
    if (!body.render.visible) continue;
    g.fillStyle = body.render.fillStyle;
    if (body.label == "Circle Body") {
      g.beginPath();
      const x = body.position.x;
      const y = body.position.y;
      const r = body.circleRadius;
      circle(g, x, y, r);
      if (r > 12) {
        g.fillStyle = "black";
        const r2 = r * .65;
        const r3 = r2 * .1;
        const th = body.angle - Math.PI / 2;
        const dth = Math.PI / 3;
        const x1 = x + Math.cos(th + dth) * r2;
        const y1 = y + Math.sin(th + dth) * r2;
        circle(g, x1, y1, r3);
        const x2 = x + Math.cos(th - dth) * r2;
        const y2 = y + Math.sin(th - dth) * r2;
        circle(g, x2, y2, r3);
        //g.fillStyle = "white";
        //circle(g, x, y, r3);
      }
    } else {
      g.beginPath();
      const v = body.vertices;
      g.moveTo(v[0].x, v[0].y);
      for (let i = 1; i < v.length; i++) {
        g.lineTo(v[i].x, v[i].y);
      }
      g.closePath();
      g.fill();
    }
  }
};
