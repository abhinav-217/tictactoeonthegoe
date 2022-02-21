console.log("Welcome to The Tic Tac Toe")
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let gameDraw = new Audio("gameDraw.mp3");
let turn = "X";
let isgameover = false;
let count = 0;
let winCountX = 0;
let winCountO = 0;
let countIterations = 0;
music.play();
//function to change the turn
const changTurn = () => {
    return turn === "X" ? "O" : "X";
}
window.onload=function(){
    music.pause();
  }
function pauseMusic()
{
    music.pause();
}

// function to check for a win
function checkMusic()
{
    let stopMusic = document.getElementById('stopMusic');
    if(stopMusic.innerText==="MUTE")
    {
        stopMusic.innerText = "PLAY MUSIC";
        music.pause();
        return false;
    }
    else{
        stopMusic.innerText = "MUTE";
        music.play();
        return true;
    }
}
function ResetGame()
{
    console.log("Resetting the game");
    document.querySelector('.image2').getElementsByTagName('img')[0].style.width = "0px";
    count = 0;
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    countIterations = 0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px"
}
function reload() {
    reload = location. reload();
}
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won 🔥🔥👍 Restarting........";
            document.querySelector('.info').style.color = "blue";
            isgameover = true;
            countIterations = 1;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            setTimeout(ResetGame,3000);
            if(boxtext[e[0]].innerText==="X")
            {
                winCountX++;
            }
            else{
                winCountO++;
            }
        }
    })
}

// Game Logic starts here

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changTurn();
            audioturn.play();
            count = count + 1;
            checkWin();
            if (!isgameover) {
                if (count == 9) {
                    setTimeout(ResetGame,3000);
                    gameDraw.play();
                    document.getElementsByClassName("info")[0].innerText = "Nobody Won!!! Again Starting...........";
                    document.getElementsByClassName("info")[0].style.color = "red";
                    document.querySelector('.image2').getElementsByTagName('img')[0].style.width = "180px";
                }
                else {
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                    document.getElementsByClassName("info")[0].style.color = "purple";
                }
            }
            else{
                if(countIterations===1)
                {
                    document.querySelector('.score').getElementsByTagName('span')[0].innerText = "The Score of X is: "+winCountX;
                    document.querySelector('.score').getElementsByTagName('span')[1].innerText = "The Score of O is: "+winCountO;
                }
                countIterations = 0;
            }
        }

    })
})

let reset = document.getElementById('reset');
reset.addEventListener('click',ResetGame);