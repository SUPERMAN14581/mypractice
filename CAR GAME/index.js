var blueCar = document.querySelector("#bluecar")
var racecar = document.querySelector(".racecar")
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game")
var counter =0;
var jumpsound = document.getElementById("jumpsound")

// working on bluecar

blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
   counter++
})

//race car working


// game over 

setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(racecar).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)
   


