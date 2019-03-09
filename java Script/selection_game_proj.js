var player1=document.querySelector("button")
var player2=document.querySelectorAll("button")[1]
var numbers=document.querySelector("p span")
var p1Head= document.querySelector("#p1")
var p2Head= document.getElementById("p2")
var addingWin= document.querySelector("input").textContent
var reset=document.getElementById("reset")
var winNum=Number(numbers.textContent)+1
// round values
var round=document.getElementById("rounds")


// Playing rounds
round.addEventListener("change", function(){
    numbers.textContent=round.value;
    winNum=Number(round.value)+1;
    
})

// Player1 click method
var p1score=1
// function counting1(){
//     if (p1score<=numbers){
//         p1Head.textContent= p1score++
//     }
// }
player1.addEventListener("click",function(){
    if (!gameOver){
        p1Head.textContent= p1score++
    }
    if (p1score===winNum){
        p1Head.style.color="green"
        gameOver=true
    }
})



// Player2 click method
var p2score=1
var gameOver=false
player2.addEventListener("click",function(){
    if (!gameOver){
        p2Head.textContent= p2score++
    }
    if (p2score===winNum){
        p2Head.style.color="green"
        gameOver=true
    }
})


// Setting reset button
reset.addEventListener("click",function(){
    location.reload(true)
    // p1Head.textContent=0
    // p2Head.textContent=0
    // numbers.textContent=5
    // round.value
    // p1score=!gameOver
    // p2score=!gameOver
})

