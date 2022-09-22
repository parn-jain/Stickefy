let html = document.getElementById("test").innerHTML;
console.log(html);
const a1 = new Audio(`songs/${html}.mp3`);
// const a1 = new Audio();
// a1.src = `songs/${num}.mp3`;
function first(num) {
    var play = document.getElementsByClassName("fa");
    console.log(play[num].classList.value.split(" ")[1])
    if (play[num].classList.value.split(" ")[1] == "fa-play") {
        for (let i = 0; i < play.length; i++) {
                play[i].classList.replace("fa-pause", "fa-play");
                // a1.pause();
            }
            play[num].classList.replace("fa-play", "fa-pause");
                            a1.play();
                        } 
                        
                        else
                        {
                            console.log("yes");
                            for (let i = 0; i < play.length; i++) {
                                play[i].classList.replace("fa-pause", "fa-play");
                                // a1.pause();
                            }
                            play[num].classList.replace("fa-pause", "fa-play");
                            a1.pause();
                            console.log("this");

        }

        // a1.pause();

        // if(a1.paused)
        // {
        //     console.log("play");
        //     a1.play();
        // }

        // else
        // {
        //     console.log("pause")
        //     a1.pause();
        // }
    }
    
    