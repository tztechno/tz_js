// 枠をつくる
const world = createWorld(document.body, drawWorld);
world.add(Bodies.rectangle(100, 500, 50, 900, { isStatic: true }));
world.add(Bodies.rectangle(900, 500, 50, 900, { isStatic: true }));
world.add(Bodies.rectangle(500, 925, 800, 50, { isStatic: true }));
