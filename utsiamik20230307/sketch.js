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

let timer = 0;

const vm = Vue.createApp({
  data() {
    return {
      datas: uhuanikData,
      timer: timer,
    };
  },
});

vm.mount("#app");

//計時器功能

let timerStatus = "stop";
let timerInterval;

const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
const timerTime = document.getElementById("time");

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
