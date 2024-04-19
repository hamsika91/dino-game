const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")
function jump(){
    if (dino.classList != "jump"){
    
    dino.classList.add("jump");

    setTimeout(function(){
        dino.classList.remove("jump");

    },300); /*to remove dino class so that it does'nt happen once*/
  }
}
let isAlive = setInterval(function(){
    //get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //detect collition
    if(cactusLeft < 100 && cactusLeft >0 && dinoTop >= 150){
        //console.loog("collision");
        //collision
        alert("Game Over!");
    } 

},10);

document.addEventListener("keydown",function(event){
    jump();
});