let html = document.getElementById("test").innerHTML;
const a1 = new Audio();
let number = -1;
var bars = document.getElementsByClassName("playing");
function first(num) {
// this part is working on ,  play song when clicked, get sequence number given to the argument of function fist, pause all the other 
//sound by using a for loop,       replacing play class and pause class (only 1 i function is used fa-play and fa-pause change
// hote jaa rahe hay)
    var play = document.getElementsByClassName("fa");
    console.log(play[num].classList.value.split(" ")[1])
    if (play[num].classList.value.split(" ")[1] == "fa-play") {
        for (let i = 0; i < play.length; i++) {
            play[i].classList.replace("fa-pause", "fa-play");
        }
        play[num].classList.replace("fa-play", "fa-pause");
        if (number != num) {
            number = num
            a1.src = `songs/${number}.mp3`;

        }
        a1.play();


    } else {
        for (let i = 0; i < play.length; i++) {
            play[i].classList.replace("fa-pause", "fa-play");
        }
        play[num].classList.replace("fa-pause", "fa-play");
        a1.pause();
    }


// Playing Green bars of sound--------------------------------------------------------------------------------------------------
    if (a1.played) {
        console.log("hhhhhhhhhh");
        for (let j = 0; j < bars.length; j++) {
            bars[j].classList.remove("playingGIF");
        }
        bars[num].classList.add("playingGIF");

    }
    if (a1.paused) {
        bars[num].classList.remove("playingGIF");

    }
}

//------------------------------------------------------------------------------------------------------------------------------
// Play button visible on hover  and removed on un-hover ------------------------------------------------------------------------------------------------------
var trying = document.getElementsByClassName("fa");
var SerialNo = document.getElementsByClassName("no");
function hover(hoi) {
    console.log("hello , i am working");
    trying[hoi].classList.add("fafake");
    SerialNo[hoi].classList.add("pfake");
}

function leave(hat) {

    if(number!=hat)
    {

        trying[hat].classList.remove("fafake");
        SerialNo[hat].classList.remove("pfake");
    }   
}
// ------------------------------------------------------------------------------------------------------------------------------------


