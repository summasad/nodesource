//타이머
//setInterval(콜백함수, ms)
//setTimeditate
//setTimeout

//타이머 해제
//clearTimeout(아이디)
//clearInterval(아이디)
//clearImmediate(아이디)

const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1.5초 마다 실행");
}, 1500);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않는다");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않음");
});

clearImmediate(immediate2);
