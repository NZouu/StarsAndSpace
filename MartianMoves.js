var blockM = document.getElementById("blockM");
var holeM = document.getElementById("holeM");
var characterM = document.getElementById("characterM");
var flying = 0;
var counter = 0;

holeM.addEventListener('animationiteration', () => { //runs this code back
    var random = -((Math.random()*300)+150);
    holeM.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var characterMTop = parseInt(window.getComputedStyle(characterM).getPropertyValue("top"));
    if(flying==0){
        characterM.style.top = (characterMTop+3)+"px";
    }
    var blockMLeft = parseInt(window.getComputedStyle(blockM).getPropertyValue("left"));
    var holeMTop = parseInt(window.getComputedStyle(holeM).getPropertyValue("top"));
    var cTop = -(800-characterMTop);
    if((characterMTop>850)||((blockMLeft<20)&&(blockMLeft>-50)&&((cTop<holeMTop)||(cTop>holeMTop+140)))){ //MATH >< lots of trial and error here so double check for errors
        alert("MARTIAN CRASHED Score: "+(counter-1));
        characterM.style.top = "px";
        counter=0;
    }
},10); //every 10 ms it returns the top position of the character 

function fly(){
    flying = 1;
    let flyCount = 0;
    var flyInterval = setInterval(function(){
        var characterMTop = parseInt(window.getComputedStyle(characterM).getPropertyValue("top"));
        if((characterMTop>6)&&(flyCount<15)){
            characterM.style.top = (characterMTop-5)+"px";
        }
        if(flyCount>20){
            clearInterval(flyInterval);
            flying=0;
            flyCount=0;
        }
        flyCount++;
    },10);
}
