console.log('Welcome to Tic Tac Toe');

// document.querySelector("body").addEventListener('onload',(e) => {
    // })
    
let bg = new Audio('music.mp3');
let x = new Audio('x_sound.wav');
let O = new Audio('O_sound.wav');
let over_sound = new Audio('game_over.wav');
let turn = 'X';
let gameover = false;
// document.querySelector('#reset').addEventListener('click', (e) => {
    // })
bg.play();
//Function to change the turn
const changeTurn = () => {
    // return turn === 'X' ? 'O' : 'X';
    if (turn === 'X'){
        x.play();
        return 'O';
    }
    else{
        O.play();
        return 'X';
    }
}

//Function to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('box_text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won';
            gameover = true;
            over_sound.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100px";
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.box_text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})

//Reset
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.box_text');
    Array.from(boxtexts).forEach(e => {
        e.innerText = "";
    });
    turn = 'X';
    gameover = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});

//Draw
let draw = document.querySelectorAll('.box');
let count = 0;
Array.from(draw).forEach(e => {
    if(e.innerText == 'X' || e.innerText == 'O')
        ++count;
})
if (count == 9){
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "100px";
}