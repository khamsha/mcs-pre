const rock = 0;
const scissors = 1;
const paper = 2;

let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));

let computer = Math.floor(Math.random() * 3);

if(player == rock && computer == scissors) {
    console.log('player wins');
} else if(player == rock && computer == paper) {
    console.log('computer wins');
} else if(player == scissors && computer == paper) {
    console.log('player wins');
} else if(player == scissors && computer == rock) {
    console.log('computer wins');
} else if(player == paper && computer == rock) {
    console.log('player wins');
} else if(player == paper && computer == scissors) {
    console.log('computer wins');
} else {
    console.log('Draw!')
}