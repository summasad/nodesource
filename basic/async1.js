// 비동기: 특정 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행

// function getData(callback) {
//   let result;
//   $.get("https://jsonplaceholder.typicode.com/todos/1", (response) => {
//     result = response;
//   });
//   return result;
// }
//console.log(getData()); //undifined

//callback 함수 : 비동기 해결
function getData(callback) {
  $.get("https://jsonplaceholder.typicode.com/todos/1", (response) => {
    callback(response);
  });
}

// getData((data) => {
//   console.log(data);
// }); //1급 함수

//콜백 지옥
function getData2(callback) {
  $.get("https://jsonplaceholder.typicode.com/todos/", (response) => {
    callback(response);
  });
}

getData((data) => {
  console.log(data);

  getData2((data) => {
    console.log(data);
  });
});

// console.log("hello");
// setTimeout(() => {
//   console.log("bye");
// }, 3000);
// console.log("hello again");

// 콜백 지옥 해결
// 1. Promise
// 2. async, await

function getData(callback) {
  return new Promise((resolve, reject) => {
    $.get("https://jsonplaceholder.typicode.com/todos/1", (response) => {
      if (response) resolve(response);
      reject(new Error("에러 발생"));
    });
  });
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
