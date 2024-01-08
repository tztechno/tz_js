
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = parseInt(input[0]); // 日付の個数
const T = input.slice(1,1+N); // 日付の文字列配列

function convertDates(T) {
  const dateObjects = T.map(t_str => new Date(t_str));
  dateObjects.forEach(dateObj => {
  console.log(dateObj.toISOString());
  });
}

convertDates();

#####################################

const dateString = "2022-01-01T12:34:56.789Z";
const dateObject = new Date(dateString);

if (dateObject instanceof Date && !isNaN(dateObject)) {
  console.log('変換成功:', dateObject);
} else {
  console.log('変換失敗');
}
