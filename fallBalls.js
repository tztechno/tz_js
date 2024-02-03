  const fallBalls = (type, n) => {
    const w = sizes[type].r;
    const color = sizes[type].color;
    for (let i = 0; i < n; i++) {
      const x = 500 + Math.random() * 400 - 200;
      const y = -400 - Math.random() * 400;
      const options = {
        friction: 1,
        frictionAir: 0.03,
        density: .001, // 密度
        restitution: 0.1, // 反発係数
      };
      const b = Bodies.circle(x, y, w, options);
      b.render.fillStyle = color;
      b.size = w;
      b.level = type;
      world.add(b);
      balls.push(b);
    }
  };
