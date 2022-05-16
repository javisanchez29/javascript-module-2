const imagenesLam = [
  "https://cdn.motor1.com/images/mgl/4JyZA/s1/lamborghini-aventador-lp-780-4-ultimae.jpg",
  "https://www.diariomotor.com/imagenes/picscache/750x/lamborghini-huracan-evo-2019-0119-017_750x.jpg",
  "https://www.autonocion.com/wp-content/uploads/2020/03/lamborghini-svj.jpg",
  "https://megaricos.com/wp-content/uploads/2021/01/shutterstock_1532333705.jpg"
]

console.log(imagenesLam);
const autoBackBtn = document.querySelector('#autoBackBtn')
const backBtn = document.querySelector('#backBtn')
const stopBtn = document.querySelector('#stopBtn')
const nextBtn = document.querySelector('#nextBtn')
const autoNextBtn = document.querySelector('#autoNextBtn')
const imagenesBo = document.querySelector('#imageCar')
let index = 0
let toNext 
let toBack

imagenesBo.src = imagenesLam[index]

nextBtn.addEventListener('click',() => siguiente())
backBtn.addEventListener('click',() => anterior())
autoNextBtn.addEventListener('click',() => autoNext())
autoBackBtn.addEventListener('click',() => autoBack())
stopBtn.addEventListener('click',() => Stop())

function next() {
    if (index == imagenesLam.length -1) {index = -1 ;
    }
    index++;
    imagenesBo.src = imagenesLam [index];
    console.log(index, imagenesLam[index]);
};

function autoNext(){
    clearInterval(toBack)
     toNext = setInterval("next()",1000);
};

function autoBack(){
    clearInterval(toNext)
     toBack = setInterval("back()",1000);
};

function Stop(){
    if (toNext != undefined) {
        clearInterval(toNext)
    }
    if (toBack != undefined) {
        clearInterval(toBack)
    }
};

function back (){
    if(index < 1){
        index = imagenesLam.length 
    }
    index --
    imagenesBo.src = imagenesLam[index]
    console.log(index, imagenesLam[index]);
};