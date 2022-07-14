const gameState = {
    players: ["x", "o"],
    board: [
        ["x", "x", "x"],
        [null, null, null],
        [null, null, false],
    ],
    currentPlayer: "x",
};

for (let i=0; i<gameState.board.length;i++){
    console.log(gameState.board[i].join(""));
}

