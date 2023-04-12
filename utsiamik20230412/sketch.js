// let words = []
// let cnv;
// function setup(){
//     cnv = createCanvas(100,100);
//     cnv.hide();
//     words[1] = {
//         subok: createDiv().class("subok"),
//         han: createElement("h1","愛國者三型增程型飛彈").class("han"),
//         lomaji: createElement("h2","ài-kok-tsiá sann-hîng tsing-thîng-hîng hui-tuânn").class("lomaji"),
//         huagi: createDiv("愛國者三型增程型飛彈").class("huagi"),
//     }
//     words[1].han.parent(words[1].subok)
//     words[1].lomaji.parent(words[1].subok)
//     words[1].huagi.parent(words[1].subok)
// }

const { createApp, ref } = Vue;

const vm = Vue.createApp({
  data() {
    return {
      datas: uhuanikData,
    };
  },
});

vm.mount("#app");

//計時器功能

let timerStatus = "stop";
let timerInterval;
let timer = 0;
let timeAmount = 0;

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
const timerTime = document.getElementById("time");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const count = document.getElementById("count");
const avergeTime = document.getElementById("averge-time");

count.textContent = 0;

function timeUpdate() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  const startTime = document.getElementById("start-time").value;
  // console.log(startTime.value);
  let startH = Number(startTime.substr(0, 2));
  let startM = Number(startTime.substr(3, 2));
  let startS = 0;
  // console.log(startH);
  if (h == 0) {
    h = 12;
  }
  // h = h < 10 ? "0" + h : h;
  // m = m < 10 ? "0" + m : m;
  // s = s < 10 ? "0" + s : s;

  const timeDifference = (h - startH) * 3600 + (m - startM) * 60 + (s - startS);
  const count = document.getElementById("count").textContent;
  // console.log(count);
  const avergeSec =
    Number(count) == 0 ? timeDifference : timeDifference / Number(count);

  let avergeM = Math.floor(avergeSec / 60);
  let avergeS = Math.floor(avergeSec % 60);

  avergeM = avergeM < 10 ? "0" + avergeM : avergeM;
  avergeS = avergeS < 10 ? "0" + avergeS : avergeS;

  if (timeDifference > 0) {
    var time = avergeM + ":" + avergeS;
    avergeTime.textContent = time;
  } else {
    avergeTime.textContent = "err";
  }

  setTimeout(timeUpdate, 1000);
}

timeUpdate();

// setInterval(function () {
//   timeAmount++;
//   avergeTime.textContent = timeAmount;
//   // avergeTime.textContent = timeTransfer(
//   //   count.textContent == 0 ? timeAmount : timeAmount / count.textContent
//   // );
// }, 1000);

plusButton.addEventListener("click", function (event) {
  count.textContent = Number(count.textContent) + 1;
});

minusButton.addEventListener("click", function (event) {
  count.textContent = count.textContent > 0 ? Number(count.textContent) - 1 : 0;
});

playButton.addEventListener("click", function (event) {
  if (timerStatus === "stop") {
    timerStatus = "playing";
    playButton.textContent = "◾";
    timerInterval = setInterval(function () {
      timer++;
      timerTime.textContent = timeTransfer(timer);
    }, 1000);
  } else if (timerStatus === "playing") {
    timerStatus = "stop";
    playButton.textContent = "▶️";
    clearInterval(timerInterval);
  }
});

resetButton.addEventListener("click", function (event) {
  timerStatus = "stop";
  timer = 0;
  timerTime.textContent = timeTransfer(timer);
  playButton.textContent = "▶️";
  clearInterval(timerInterval);
});

function timeTransfer(time) {
  const minute =
    Math.floor(timer / 60) > 9
      ? Math.floor(timer / 60)
      : "0" + Math.floor(timer / 60);
  const second = timer % 60 > 9 ? timer % 60 : "0" + (timer % 60);
  return `${minute}:${second}`;
}
