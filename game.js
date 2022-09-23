let html = document.getElementById("test").innerHTML;
// var SongNo =0;
// var css = document.getElementsByClassName("Sname")[SongNo].innerHTML;
// console.log(html);
const a1 = new Audio();
let number = -1;
var bars = document.getElementsByClassName("playing");
function first(num) {
    var play = document.getElementsByClassName("fa");
    console.log(play[num].classList.value.split(" ")[1])
    if (play[num].classList.value.split(" ")[1] == "fa-play") {
        for (let i = 0; i < play.length; i++) {
            play[i].classList.replace("fa-pause", "fa-play");
        }
        play[num].classList.replace("fa-play", "fa-pause");
        if(number != num){
            number = num
            a1.src = `songs/${number}.mp3`
        }
        a1.play();
        
        
    } else {
        for (let i = 0; i < play.length; i++) {
            play[i].classList.replace("fa-pause", "fa-play");
        }
        play[num].classList.replace("fa-pause", "fa-play");
        a1.pause();
    }

    if(a1.played)
        {
            console.log("hhhhhhhhhh");
            for (let j = 0; j < bars.length; j++)
            {
                bars[j].classList.remove("last");
            }
            bars[num].classList.add("last");
            
        }
        if(a1.paused)
        {
            bars[num].classList.remove("last");

        }
}


var trying = document.getElementsByClassName("fa");
var happy = document.getElementsByClassName("no");
function hover(hoi)
{
    console.log("hello , i am working");
    trying[hoi].classList.add("fafake");
    happy[hoi].classList.add("pfake")
    
}

function leave(hat)
{
    console.log("good bye");
    trying[hat].classList.remove("fafake");
    happy[hat].classList.remove("pfake");


}


