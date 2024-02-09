#####################################################
#####################################################
#####################################################
#####################################################
#####################################################
#####################################################
#####################################################
#####################################################
#####################################################
#####################################################
setInterval(() => {
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
  const type = rnd(sizes.length / 4);
  fallBalls(type, nfalls);
#####################################################
  // 画面外に落下したものを削除
  for (let i = 0; i < balls.length; i++) {
    const b = balls[i];
    const x = b.position.x;
    const y = b.position.y;
    if (y > 1100 || y < -1000 || x < -100 || x > 1100) {
      balls.splice(i, 1);
      i--;
      world.remove(b);
    }
  }
#####################################################
// マウス移動かマルチタッチされたとき、ボールに触れていたら消す
world.ontouch = (p) => {
  for (;;) {
    const nhit = balls.findIndex(i => distance(i.position, p) <= i.size);
    if (nhit < 0) break;
    const hit = balls[nhit];
    balls.splice(nhit, 1);
    world.remove(hit);
  }
};
#####################################################
btn.onclick = async () => {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    const res = await DeviceMotionEvent.requestPermission();
    if (res == "granted") {
      btn.style.display = "none";
      world.useRealGravity();
      world.useUI();
    }
  }
};
#####################################################
// 2点間の距離計算
const distance = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  return len;
};
#####################################################
// ボールの大きさ
const sizes = [];
let size = 40;
for (let i = 1; i <= 10; i++) {
  const r = Math.sqrt(size);
  const color = `hsl(${i / 10 * 360},90%,50%)`
  sizes.push({ r, color });
  size *= 2;
}
#####################################################
const world = createWorld(document.body, drawWorld);
world.add(Bodies.rectangle(100, 500, 50, 900, { isStatic: true }));
world.add(Bodies.rectangle(900, 500, 50, 900, { isStatic: true }));
world.add(Bodies.rectangle(500, 925, 800, 50, { isStatic: true }));
#####################################################
const circle = (g, x, y, r) => {
  g.beginPath();
  g.arc(x, y, r, 0, 2 * Math.PI);
  g.closePath();
  g.fill();
};

#####################################################
