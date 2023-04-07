
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var arr = [0, 1];
var randomElement = getRandomElement(arr);
console.log(randomElement); // 0または1のいずれかが出力される
