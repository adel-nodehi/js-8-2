"use strict";

const btnFetch = document.querySelector("button");

/*
// synchronous
console.log("hello 1");
// synchronous long task: Block our code
prompt("say something!");
console.log("hello 2");
*/

/*
// asynchronous
console.log("before Timeout");
setTimeout(function () {
  console.log("setTimeout: 1 second passed");
}, 1000);
console.log("after Timeout");
*/

const createCard = function ({ slip: adviceData }) {
  const div = document.createElement("div");

  const id = document.createElement("p");
  id.textContent = adviceData.id;

  const advice = document.createElement("p");
  advice.textContent = adviceData.advice;

  div.append(id, advice);

  document.querySelector(".container").append(div);
};

const showError = function (errorMessage) {
  const p = document.createElement("p");
  p.textContent = `Something went wrong: ${errorMessage}`;

  document.body.prepend(p);
};

/*
// AJAX: Asynchronous JavaScript and XML
const request = new XMLHttpRequest();
request.open("GET", "https://api.adviceslip.com/advice");
request.send();

request.addEventListener("load", function () {
  const response = JSON.parse(request.responseText);

  const { slip: adviceData } = response;

  createCard(adviceData);

  // request another advice
  const request2 = new XMLHttpRequest();
  request2.open("GET", "https://api.adviceslip.com/advice");
  request2.send();

  request2.addEventListener("load", function () {
    const response = JSON.parse(request2.responseText);

    const { slip: adviceData } = response;

    createCard(adviceData);
  });
});

setTimeout(function () {
  console.log("1 second passed");
  setTimeout(function () {
    console.log("2 second passed");
    setTimeout(function () {
      console.log("3 second passed");
      setTimeout(function () {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// const request = new XMLHttpRequest();
// request.open("GET", "https://api.adviceslip.com/advice");
// request.send();

// const getAdvice = function () {
//   console.log("show loader");

//   fetch(`https://api.adviceslip.com/advice/1300000`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       if (data.message.type === "error") throw new Error("Invalid id");

//       createCard(data);

//       return fetch("https://api.adviceslip.com/advice");
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       createCard(data);
//     })
//     .catch((err) => {
//       console.log(`💥💥💥 ${err}`);
//       showError(err.message);
//     })
//     .finally(() => {
//       console.log("hide loader");
//     });
// };

// btnFetch.addEventListener("click", getAdvice);

// Promise.resolve("promise resolved").then((message) => {
//   console.log(message);
// });

// Promise.reject("promise resolved").catch((err) => {
//   console.error(err);
// });

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
}).then(() => {
  console.log("1 second passed");
});

new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("We won!🎉");
  } else {
    reject("We loose tha game.💥");
  }
})
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
