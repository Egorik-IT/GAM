const pakimon = document.querySelector("#pakimon");
const tiger__1 = document.querySelector("#tiger__1");
const cactus = document.querySelector("#cactus");

document.body.addEventListener("click", function(event){
    jump();
})
document.body.addEventListener("keydown", function(event){
    jump();
})

function jump(){
    if(pakimon.classList != "jump"){
        pakimon.classList.add("jump")
    }
    setTimeout(function(){
        pakimon.classList.remove("jump")
    }, 390)
}

let isAlive__1 = setInterval(function(){
    let pakimonTop = parseInt(window.getComputedStyle(pakimon).getPropertyValue("top"));
    let tigerLeft__1 = parseInt(window.getComputedStyle(tiger__1).getPropertyValue("left"));

    if(tigerLeft__1 < 90 && tigerLeft__1 > 0 && pakimonTop >= 420){
        alert('GAME OVER!!!')
    }
}, 10)
let cactus__2 = setInterval(function(){
    let pakimonTop = parseInt(window.getComputedStyle(pakimon).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 90 && cactusLeft > 0 && pakimonTop >= 420){
        alert('Ты проиграл!!!')
    }
}, 10)



