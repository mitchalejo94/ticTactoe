const gameState = {
    players: ["x", "o"],
    board: [
        [null, null, null]
        [null, null, null]
        [null, null, null]
    ],
    currentPlayer: "x",

};

//HTML board
board.addEventListener ("click", event => {
   if ( !event.target.innerHTML){
       event.target.innerHTML = gameState.currentPlayer
   }
   if (currentPlayer === "x")
    });
