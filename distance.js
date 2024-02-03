// 2点間の距離計算
const distance = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  return len;
};

const point1 = { x: 1, y: 2 };
const point2 = { x: 4, y: 6 };

const result = distance(point1, point2);
console.log(result); // 結果を出力

/*
const distance = (p1, p2) => { /* 関数の本体 */ }; の形式は、
  ES6 (ECMAScript 2015) から導入されたアロー関数の構文です。
  アロー関数は簡潔であり、特に無名関数を使う場合や関数を変数に代入する場合に便利です。
const は変数の再代入を防ぐためのキーワードです。
  このケースでは、distance 関数が再代入されないように定数 (const) で宣言されています。
  関数が変更されない場合や再代入されない場合は、const を使用することが一般的です。
*/
////////////////////////////

function distance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  return len;
}
////////////////////////////

