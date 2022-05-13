const hole = document.getElementById("hole");
var result = document.getElementById("result")
var text = document.getElementById("text")
var game = document.getElementById("game")
var jumping = 0;
var score = 0;
var jumpbutton = document.getElementById("jumpbutton")
jumpbutton.addEventListener("click",jump)
var tumhiho = document.getElementById("tumhiho")
function jump(){
    jumping = 1;
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (birdTop - 60) + "px"
    tumhiho.play();
    setTimeout(function(){
        jumping = 0
    }, 100)
}


hole.addEventListener("animationiteration",hol);

function hol(){
    var random = -((Math.random()*350) + 150)
    hole.style.top = random + "px"
    score++;
}

var fall = setInterval(function(){
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping==0){bird.style.top = (birdTop + 2) + "px";tumhiho.play();}
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
      var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))
      var hTop = (500 + holeTop);
      if((birdTop > 450) || ((blockLeft<50)&& (blockLeft > -50) && ((birdTop < hTop) || (birdTop > hTop + 100 )))){
          result.style.display = "block";
          text.innerText = `Score : ${score}`;
          game.style.display = "none";
          jumpbutton.style.display = "none";
          score = 0;

          
      }
},10)


