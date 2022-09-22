let html = document.getElementById("test").innerHTML;
// var SongNo =0;
// var css = document.getElementsByClassName("Sname")[SongNo].innerHTML;
// console.log(html);
const a1 = new Audio();
let number = -1;
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
}


