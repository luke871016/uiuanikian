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
    data(){
      return {
        datas : uhuanikData
      }
    }
  })

vm.mount('#app')