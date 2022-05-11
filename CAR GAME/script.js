var blueCar = document.querySelector("#bluecar")
var racecar = document.getElementById("racecar")
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game")
var counter =0;
var jumpsound = document.getElementById("jumpsound")

// var moveright = document.getElementById("btn2")
// moveright.addEventListener('click',moveright123)
// function moveright123()
//     {
//            
//         }
            
//         }
// }

// working on bluecar

blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
   counter++
})

//race car working

window.addEventListener("keydown",function(e){
    if(e.keyCode =="39"){var racecarleft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"))
    if(racecarleft<260){racecar.style.left = (racecarleft + 130) + "px"
    jumpsound.play()
}
    
}
    

    if(e.keyCode == "37"){var racecarleft = parseInt(this.window.getComputedStyle(racecar).getPropertyValue("left"))
    if(racecarleft > 0){racecar.style.left = (racecarleft - 130) + "px"
    jumpsound.play()
}
    
}
    
})

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
   


