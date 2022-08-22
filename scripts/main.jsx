//declare variables
var playerScore = 0;
var computerScore = 0;

//logic for turns
const whoGoesFirst = (player,computer) => {
  let turn = Math.random();
  return (turn < 0.5) ? player : computer;
}

//