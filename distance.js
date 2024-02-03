// 2点間の距離計算
const distance = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  return len;
};
