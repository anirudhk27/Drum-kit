for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        makesound(this.innerHTML); 
        buttonAnimation(this.innerHTML);               
    });    
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key){
    switch(key)    
    {
        case "a":var audioname=new Audio("./sounds/tom-2.mp3");audioname.play();break;
        case "s":var audioname=new Audio("./sounds/tom-3.mp3");audioname.play();break;
        case "w":var audioname=new Audio("./sounds/tom-1.mp3");audioname.play();break;            
        case "j":var audioname=new Audio("./sounds/snare.mp3");audioname.play();break;
        case "d":var audioname=new Audio("./sounds/tom-4.mp3");audioname.play();break;
        case "l":var audioname=new Audio("./sounds/kick-bass.mp3");audioname.play();break;
        case "k":var audioname=new Audio("./sounds/crash.mp3");audioname.play();break;
    }    
        
}
function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}
function buttonAnimation2(key){
    
}

