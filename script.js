const num = [2, 4, 9, 10, 45, 67, 8, 90]; ;
const chet = [];


for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    chet.push(num[i]);
  }
}

console.log( num , "boshlanadigan array");
console.log(chet , "juft sonlarga ajratilgan array");
