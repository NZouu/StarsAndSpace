var characterA = 
document.getElementById("characterA");

var blockA =
document.getElementById("blockA");

function jump(){
    if (characterA.classList.contains("animateA")){return}
    
    characterA.classList.add("animateA");
    setTimeout(() => {
        characterA.classList.remove("animateA")
    }, 500);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(characterA).getPropertyValue("top")); //parseint -> only want the int because it will return it to me as a int 
    var blockLeft =
    parseInt(window.getComputedStyle(blockA).getPropertyValue("left"));

    if(blockLeft<80 && blockLeft>0 && characterTop>=260){ //if the values meet at a certain point it you will lose
        blockA.style.animation = "none";
        blockA.style.display = "none";
        alert("Astronaut got Abducted");
        window.location.reload(); //due to my lack of know how I have it so that when the player loses it refreshes the page
    }

},10);