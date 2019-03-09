var back=document.querySelector("button")
var body=document.querySelector("body")

back.addEventListener("click",function(){
    body.classList.toggle("color")
});



// var isOrange = false;
// function color(){
//     if (isOrange){
//         body.style.backgroundColor="white"
//     }
//     else {
//         body.style.backgroundColor="orange"
//     }
//     isOrange = !isOrange
// }

// back.addEventListener("click",color)




// for (var i=0; i<=4; i++){
//     document.getElementsByTagName("img")[i].classList.add("pic-class")
// } 
// var ele=document.querySelector("img")


// ele.addEventListener("click", function(){
//     ele.setAttribute("src","../journey_backg2.jpg")
// });

// ele.addEventListener("click", function(){
//     alert("click has been received on your commands now sir")
//     ele.setAttribute("src","../journey_backg5.jpg")
// });








// var age = prompt("What is your age?")
// if (age<0){
//     alert("Come back when you are out of the womb");
// }
// else if (age == 21){
//     alert("Happy 21st birthday");
// }
// else if (!(age%2 == 0)){
//     alert("Your age is odd");
// }
// else if (age % Math.sqrt(age)==0){
//     alert("Perfect Square");
// }

// console.log("all numbers between -10 and 19")
// var num1=-10;
// while (num1<=19){
//     console.log(num1);
//     num1++;
// }
// console.log("All even numbers betwwen 10 and 40")
// var num2=10;
// while (num2<=40){
//     if (num2 % 2 == 0){
//         console.log(num2);
//     }
//     num2++;
// }
// console.log("All odd numbers between 300 and 333")
// var num3=301;
// while (num3<=333){
//     console.log(num3);
//     num3+=2
// }
// console.log("All numbers divisible by 5 and 3 between 5 and 50")
// var num4 = 5;
// while(num4<=50){
//     if (num4 % 5 == 0 && num4 % 3 == 0){
//         console.log(num4);
//     }
//     num4++;
// }

// var annoy = prompt("Have you reached there yet!!")

// while (annoy.indexOf('yes') !== -1 && annoy.indexOf('yeah') !== -1){
//     var annoy = prompt("Have you reached there yet!!"); 
// }
// alert("Yeah we have finally reached")
// console.log("All numbers between -10 and 19");
// for( var a=-10; a<=19; a++){
//     console.log(a)
// }

// console.log("All even numbers between 10 and 40");
// for (var b=10; b<=40; b+=2){
//     console.log(b)
// }
// console.log("All odd numbers between 300 and 333");
// for (var c=300; c<=333; c+=1){
//     if (c %2 !== 0){
//         console.log(c)
//     }
// }
// console.log("All numbers divisible by 5 and 3 between 5 and 50");
// for (var d=5; d<=50; d+=1){
//     if (d %3 == 0  && d %5 ==0){
//         console.log(d)
//     }
// }



// function isEven(num){
//     if (num%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function factorial(num){
//      var result=1;
//      for(var i=2; i<=num; i+=1){
//          result*=i;
//      }
//      return result;
// }

// function kebebToSnake(str){
//     var mynewstr=str.replace(/-/g , "_");
//     return mynewstr
// }


// if (option=='new'){
//     Todo.push(prompt("Add another new Todo List here"));
//     console.log(Todo);
//     var option=(prompt("What do you want to do?"));
// }
// else if (option=='list'){
//     console.log(Todo)
// }
// else if (option=='quit'){
//     alert("Please rate our app before you go!!!")
// }
// else{
//     alert("Please put the desired output here");
//     var option=(prompt("What do you want to do?"));
// }
// var Todo=[(prompt("Add a new Todo list"))];
// var option=(prompt("What do you want to do?"));
// while (option !== "quit"){
//     if (option=='new'){
//         Todo.push(prompt("Add another new Todo List here"));
//         console.log(Todo);
//         var option=(prompt("What do you want to do?"));
//     }
//     else if (option=='list'){
//         console.log(Todo)
//     }
//     option=(prompt("What do you want to do?"));
// }
// alert("Please rate our app before you go!!!")
// function printReverse(num){
//     console.log(num.reverse());
// }
// var n=[1,1,1,1,1]
// var u=["a","b","b"]
// var o=["b","b","b"]
// var z=["b","b","a"]
// function isUnifrom(num){
//     for (var i=0; i<num.length; i++){
//         if (num[i]==num[i+1]){
//             return true
//         }
//     }
// }
// function sumArray(num){
//     for (var i=0; i<num.length; i++){
//         return num[i]+.forEach(element => {
            
//         });
//     }
// }

// MovieDB
// var movie={
//     movie1:{
//         title:"Froze",
//         rating:5.0,
//         hasWatched:"You have watched",
//     },
//     movie2:{
//         title:"Robin Hood",
//         rating:4.5,
//         hasWatched:"You have not watched",
//     },
//     movie3:{
//         title:"Legacies",
//         rating:4.0,
//         hasWatched:"You have watched",
//     }
// }

// console.log(movie.movie1.hasWatched + " " + movie.movie1.title+ " -- "+ movie.movie1.rating +" stars" )
// console.log(movie.movie2.hasWatched + " " + movie.movie2.title+ " -- "+ movie.movie2.rating +" stars" )
// console.log(movie.movie3.hasWatched + " " + movie.movie3.title+ " -- "+ movie.movie3.rating +" stars" )


// var p1 = document.getElementById("first")
// var p11 = document.getElementsByClassName("special")
// var p111 = document.querySelector("#first")
// var p1111 = document.querySelectorAll(".special")
