const gameState = {
    players: ["x", "o"],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    currentPlayer: "x",

};
const board = document.getElementById ("board")
console.log(board);
//HTML board
board.addEventListener ("click", (event) => {
const identify = event.target.id   
console.log (identify)
});
