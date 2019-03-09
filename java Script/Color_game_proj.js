// Variables
var colorsPick=document.querySelector("#pick");
var firstRow=document.querySelectorAll(".first-row button");
var secondRow=document.querySelectorAll(".second-row button");
var modeBtnE=document.querySelector(".easy")
var modeBtnH=document.querySelector(".hard")
var 

// colors picker
colors=[
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)"
]
// functions
function getNewColor(){
    var color,symbols;
    color="#";
    symbols="0123456789ABCDEF";
    for (i=0; i<6; i++){
        color= color + symbols[Math.floor(Math.random() *16)];
    }
    document.querySelector("body section").style.backgroundColor=color
    colorsPick.textContent=color;
}
function changeModeE(){
    for (var i=0; i<firstRow.length; i++){
        firstRow[i].style.backgroundColor=colors[i]
    }
    modeBtnE.classList.add("active")
}
function changeModeH(){
    modeBtnE.classList.add("active")
}
// clicks
var clicked=false;
// if(clicked==!clicked){
//     modeBtnE.addEventListener("click",changeModeE);
    
// }
// else{
//     modeBtnE.classList.remove("active")
// }
// if(clicked==!clicked){
//     modeBtnH.addEventListener("click",changeModeH);
// }
// else{
//     modeBtnH.classList.remove("active")
// }
modeBtnE.addEventListener("click",changeModeE);
// modeBtnH.addEventListener("click",changeModeH);
