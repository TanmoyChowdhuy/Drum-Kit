

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll('.drum')[i].addEventListener("click", function (event)    
    {
        var x = this.innerHTML; 
        makeSound(x);
        addAnimation(x);
    });
}


document.addEventListener("keypress", function (event) {
    makeSound(event.key);    //this thing stores the value of keypress
    addAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log();    
    }
}

//adding animation 

function addAnimation(theLetter){
    var selectedButton = document.querySelector("."+theLetter);
    selectedButton.classList.add("pressed");
    setTimeout(function(){
        selectedButton.classList.remove("pressed");
    }, 100); 
}