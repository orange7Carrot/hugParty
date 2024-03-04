const text = document.querySelector("#text");
const frame = document.querySelector(".frame");

//box
const box = document.getElementsByClassName("box");
// const blueBox = document.querySelector("#blueBox");
// const purpleBox = document.querySelector("#purpleBox");
const eyebox = document.getElementsByClassName("eyebox");

//imge
const image = document.getElementsByClassName("image");
// const button = [blueBox,purpleBox];
const blue = document.getElementsByClassName("blue");
const green = document.getElementsByClassName("green");
const orange = document.getElementsByClassName("orange");
const red = document.getElementsByClassName("red");
const purple = document.getElementsByClassName("purple");

const pan = document.getElementsByClassName("pan");

// const images = [blue,purple];


let character = [
  {name:blue, stage: 0, eye: false, pan: false},
  {name:green, stage: 0, eye: false, pan: false},
  {name:orange, stage: 0, eye: false, pan: false},
  {name:red, stage: 0, eye: false, pan: false},
  {name:purple, stage: 0, eye: false, pan: false}
];


//Hold click 


// var mouseTimer;
// var myVar;
// function mouseDown() { 
//     mouseTimer = window.setTimeout(myFunction,500); //set timeout to fire in 2 seconds when the user presses mouse button down
// }

// function myFunction(){ myVar = true;}

// box[0].addEventListener("mousedown", mouseDown);
// box[1].addEventListener("mousedown", mouseDown);
// box[2].addEventListener("mousedown", mouseDown);
// box[3].addEventListener("mousedown", mouseDown);
// box[4].addEventListener("mousedown", mouseDown);

// box[0].addEventListener("mouseup", blueUp);  
// box[1].addEventListener("mouseup", greenUp);  
// box[2].addEventListener("mouseup", orangeUp); 
// box[3].addEventListener("mouseup", redUp); 
// box[4].addEventListener("mouseup", purpleUp); 


// function removeTimer(whoD){
//    if(myVar) console.log(whoD.name);  
//    if(myVar) hideAll(whoD); 
//    if (mouseTimer) window.clearTimeout(mouseTimer);
//    myVar = false;
   
//  }

//  // mio
let isHide = false;
let isTwo;

frame.ondblclick = showAll; 

box[0].ondblclick= blueUp;
box[1].ondblclick= greenUp;
box[2].ondblclick= orangeUp;
box[3].ondblclick= redUp;
box[4].ondblclick= purpleUp;

 function blueUp() {
  hideAll(character[0]);
}
function greenUp() {
  hideAll(character[1]);
}
function orangeUp() {
  hideAll(character[2]);
}
function redUp() {
  hideAll(character[3]);
}
function purpleUp() {
  hideAll(character[4]);
}


function hideAll(whoH){
  window.clearTimeout(isTwo);
if (isHide === false){
  for (let i=0; i < 5; i++) {
    if(character[i] !== whoH){
      console.log("hide");
      for (let l=0; l < character[i].name.length;l++){
          oHide(character[i].name[l]); 
      }
    }
  }
  let T = window.setTimeout(V=() => {isHide= true},50);
}
}


function showAll(){
  if (isHide){
    for (let i=0; i < 5; i++) {
        console.log("show");
        for (let l=0; l < character[i].name.length;l++){
          oShow(character[i].name[l]); 
        }
      }
    isHide= false;
  }
}






// cloth clicked
box[0].onclick= blueClicked;
box[1].onclick= greenClicked;
box[2].onclick= orangeClicked;
box[3].onclick= redClicked;
box[4].onclick= purpleClicked;
// eye clicked
eyebox[0].onclick= blueEyeClicked;
eyebox[1].onclick= greenEyeClicked;
eyebox[2].onclick= orangeEyeClicked;
eyebox[3].onclick= redEyeClicked;
eyebox[4].onclick= purpleEyeClicked;


//who clicked cloth functions
function blueClicked(){
  isTwo = window.setTimeout(clock,100);
  function clock(){
    bodyClicked(character[0]);
  }
}
function greenClicked(){
  isTwo = window.setTimeout(clock,100);
  function clock(){
  bodyClicked(character[1]);
  }
}
function orangeClicked(){
  isTwo = window.setTimeout(clock,100);
  function clock(){
  bodyClicked(character[2]);
  }
}
function redClicked(){
  isTwo = window.setTimeout(clock,100);
  function clock(){
  bodyClicked(character[3]);
  }
}
function purpleClicked(){
  isTwo = window.setTimeout(clock,100);
  function clock(){
  bodyClicked(character[4]);
  }
}

function bodyClicked(who) {
  for (let i=0; i < who.name.length; i++) {
    switch (who.stage) {
      case 0:
        hideCloth(who.name[i]);
        break;
      case 1:
        showPan(who.name[i]);
        break;
      case 2:
        showCloth(who.name[i]);
        break;
        case 3:
          showSwim(who.name[i]);
          break;
    }
  }
  who.stage += 1;
  console.log(who.stage);
  if(who.name === blue && who.stage > 3){
     who.stage = 0;
  }
  if(who.name !== blue && who.stage > 2){
    who.stage = 0;
  }
}

function hideCloth(who) {
       if(who.dataset.cloth === "cloth"){
         hide(who);
       }
       if(who.dataset.pan === "pan"){
        hide(who);
      }
      if(who.dataset.swim === "swim"){
        hide(who);
      }
      
 }


function showPan(who) {
      if(who.dataset.pan === "pan"){
        show(who);
      }
}

function showCloth(who) {
  if(who.dataset.cloth === "cloth"){
    show(who);
  }
  if(who.dataset.pan === "pan"){
   hide(who);
 }
 if(who.dataset.swim === "swim"){
  show(who);  
}
 }

 function showSwim(who) {
  if(who.dataset.cloth === "cloth"){
    hide(who);
  }
  if(who.dataset.pan === "pan"){
   hide(who);
 }
 if(who.dataset.swim === "swim"){
   show(who);
 }
 
}




//who cliked Eye functions
function blueEyeClicked(){
  eyeClicked(character[0]);
}
function greenEyeClicked(){
  eyeClicked(character[1]);
}
function orangeEyeClicked(){
  eyeClicked(character[2]);
}
function redEyeClicked(){
  eyeClicked(character[3]);
}
function purpleEyeClicked(){
  eyeClicked(character[4]);
}

function eyeClicked(who) {
if(who.eye){
  for (let i=0; i < who.name.length; i++) {
    if(who.name[i].dataset.eye === "eye"){
      show(who.name[i]);
    }
  }
  who.eye = false;
} else {
  for (let i=0; i < who.name.length; i++) {
    if(who.name[i].dataset.eye === "eye"){
      hide(who.name[i]);
    }
  }
  who.eye = true;
}
}

function oShow(who) {
  who.style.opacity = 1;
}
function oHide(who) {
  who.style.opacity = 0;
}


function show(who) {
  who.style.display = "block";
}
function hide(who) {
  who.style.display = "none";
}