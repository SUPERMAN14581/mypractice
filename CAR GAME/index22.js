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