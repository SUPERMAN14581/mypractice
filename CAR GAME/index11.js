var blueCar = document.querySelector("#bluecar")
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game")
var counter =0;
var jumpsound = document.getElementById("jumpsound")

var racecar1 = document.querySelector(".racecar")
var rightmove = document.getElementById("btn3")
var lefttmove = document.getElementById("btn2")
var midtmove = document.getElementById("btn4")

console.log(racecar1)

rightmove.addEventListener('click',rightmovingbykey)
lefttmove.addEventListener('click',leftmovingbykey)
midtmove.addEventListener('click',midmovingbykey)

function rightmovingbykey(){
    racecar1.classList.remove('racecar')
    racecar1.classList.add('racecar1')
    racecar1.classList.remove('racecar2')

}

function midmovingbykey(){
    racecar1.classList.add('racecar')
    racecar1.classList.remove('racecar1')
    racecar1.classList.remove('racecar2')
}

function leftmovingbykey(){ 
    racecar1.classList.remove('racecar')
    racecar1.classList.add('racecar2')
    racecar1.classList.remove('racecar1') 
}

//working on blue car

blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
   counter++
})

//gameover

setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(racecar1).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)

