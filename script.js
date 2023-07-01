const Player = () => {
    const spots = [];
    const isTurn = false
    return {spots, isTurn};
}

const player1 = Player();
player1.isTurn = true;
const player2 = Player();

const GameBoard = (() => {
    const zero = document.getElementById('0');
    const one = document.getElementById('1');
    const two = document.getElementById('2');
    const three = document.getElementById('3'); 
    const four = document.getElementById('4');
    const five = document.getElementById('5');
    const six = document.getElementById('6');
    const seven = document.getElementById('7');
    const eight = document.getElementById('8');
    const blocks = document.querySelectorAll(".block")
    const winnerText = document.querySelector(".winner-text");
    const gameEnd = document.querySelector(".game-end");
    const restartButton = document.querySelector(".restart");
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const click0 = () => {
        if(player1.isTurn == true) {
            zero.innerHTML = "x"
            player1.spots.push(0);
            player1.isTurn = false;
            zero.removeEventListener("click", click0)
            GameFlow.checkWin();
        }
        else {
            zero.innerHTML = "o";
            player2.spots.push(0);
            player1.isTurn = true;
            zero.removeEventListener("click", click0)
            GameFlow.checkWin();
        }
    }
    const click1 = () => {
        if(player1.isTurn == true) {
            one.innerHTML = "x"
            player1.spots.push(1);
            player1.isTurn = false;
            one.removeEventListener("click", click1);
            GameFlow.checkWin();
        }
        else {
            one.innerHTML = "o";
            player2.spots.push(1);
            player1.isTurn = true;
            one.removeEventListener("click", click1);
            GameFlow.checkWin();
        }
    }
    const click2 = () => {
        if(player1.isTurn == true) {
            two.innerHTML = "x"
            player1.spots.push(2);
            player1.isTurn = false;
            two.removeEventListener("click", click2);
            GameFlow.checkWin();
        }
        else {
            two.innerHTML = "o";
            player2.spots.push(2);
            player1.isTurn = true;
            two.removeEventListener("click", click2);
            GameFlow.checkWin();
        }
    }
    const click3 = () => {
        if(player1.isTurn == true) {
            three.innerHTML = "x"
            player1.spots.push(3);
            player1.isTurn = false;
            three.removeEventListener("click", click3);
            GameFlow.checkWin();
        }
        else {
            three.innerHTML = "o";
            player2.spots.push(3);
            player1.isTurn = true;
            three.removeEventListener("click", click3);
            GameFlow.checkWin();
        }
    }
    const click4 = () => {
        if(player1.isTurn == true) {
            four.innerHTML = "x"
            player1.spots.push(4);
            player1.isTurn = false;
            four.removeEventListener("click", click4);
            GameFlow.checkWin();
        }
        else {
            four.innerHTML = "o";
            player2.spots.push(4);
            player1.isTurn = true;
            four.removeEventListener("click", click4);
            GameFlow.checkWin();
        }
    }
    const click5 = () => {
        if(player1.isTurn == true) {
            five.innerHTML = "x"
            player1.spots.push(5);
            player1.isTurn = false;
            five.removeEventListener("click", click5);
            GameFlow.checkWin();
        }
        else {
            five.innerHTML = "o";
            player2.spots.push(5);
            player1.isTurn = true;
            five.removeEventListener("click", click5);
            GameFlow.checkWin();
        }
    }
    const click6 = () => {
        if(player1.isTurn == true) {
            six.innerHTML = "x"
            player1.spots.push(6);
            player1.isTurn = false;
            six.removeEventListener("click", click6);
            GameFlow.checkWin();
        }
        else {
            six.innerHTML = "o";
            player2.spots.push(6);
            player1.isTurn = true;
            six.removeEventListener("click", click6);
            GameFlow.checkWin();
        }
    }
    const click7 = () => {
        if(player1.isTurn == true) {
            seven.innerHTML = "x"
            player1.spots.push(7);
            player1.isTurn = false;
            seven.removeEventListener("click", click7);
            GameFlow.checkWin();
        }
        else {
            seven.innerHTML = "o";
            player2.spots.push(7);
            player1.isTurn = true;
            seven.removeEventListener("click", click7);
            GameFlow.checkWin();
        }
    }

    const click8 = () => {
        if(player1.isTurn == true) {
            eight.innerHTML = "x"
            player1.spots.push(8);
            player1.isTurn = false;
            eight.removeEventListener("click", click8);
            GameFlow.checkWin();
        }
        else {
            eight.innerHTML = "o";
            player2.spots.push(8);
            player1.isTurn = true;
            eight.removeEventListener("click", click8);
            GameFlow.checkWin();
        }
    }
    const playerClick = () => {
        zero.addEventListener("click", click0);
        one.addEventListener("click", click1);
        two.addEventListener("click", click2);
        three.addEventListener("click", click3);
        four.addEventListener("click", click4);
        five.addEventListener("click", click5);
        six.addEventListener("click", click6);
        seven.addEventListener("click", click7);
        eight.addEventListener("click", click8);
    }
    return {winningCombinations, winnerText, gameEnd, playerClick, restartButton, blocks};
})();

const GameFlow = (() => {
    const clearBoard = () => {
        console.log("yay")
        GameBoard.restartButton.addEventListener("click", () => {
            player1.spots = [];
            player2.spots = [];
            player1.isTurn = true;
            GameBoard.gameEnd.style.display = "none";
            GameBoard.blocks.forEach(element => {
                if(element.firstChild) element.removeChild(element.firstChild);
            });
        })
        GameBoard.playerClick();
    }

    const Win = (playerNumber) => {
        GameBoard.winnerText.innerHTML = `Player ${playerNumber} wins!`;
        GameBoard.gameEnd.style.display = "flex";
        GameFlow.clearBoard();
    }

    const Tie = () => {
        GameBoard.winnerText.innerHTML = "It's a Tie!";
        GameBoard.gameEnd.style.display = "flex";
        GameFlow.clearBoard();
    }

    

    const checkWin = () => {
        for(var i = 0; i < 8; i++) {
            var match1 = 0;
            var match2 = 0;
            for(var j = 0; j < 3; j++) {
                for(var k = 0; k < player1.spots.length; k++) {
                    if(GameBoard.winningCombinations[i][j] === player1.spots[k]) match1++;
                    
                    if(match1 === 3) GameFlow.Win(1);
                }
                for(var k = 0; k < player2.spots.length; k++) {
                    if(GameBoard.winningCombinations[i][j] === player2.spots[k]) match2++;
                    if(match2 === 3) GameFlow.Win(2);
                }
            }
        }
        if(player1.spots.length === 5) GameFlow.Tie();
    }
    
    return {checkWin, Win, Tie, clearBoard};
})();

//console.log(GameBoard.winningCombinations[1][0])

GameBoard.playerClick();
