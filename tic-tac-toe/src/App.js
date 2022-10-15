import { useState } from 'react'

import './App.css';

import { Board } from './Components/Board';

function App() {

    const WINNING_CONDITIONS = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xTurn, setXTurn] = useState(true)
    const [scores, setScores] =useState({ xScore: 0, oScore: 0 })

    const handleBoxClick = (boxIdx) => {
        const updatedBoard = board.map((value, i) => {
            if(i === boxIdx) {
                return xTurn === true ? "X" : "O"
            } else {
                return value;
            }
        })

        const winner = checkWInner(updatedBoard);

        if(winner) {
            if(winner === "O") {
                let {oScore} = scores;
                oScore += 1;
                setScores({
                    ...scores, oScore
                })
            } else {
                let {xScore} = scores;
                xScore += 1;
                setScores({
                    ...scores, xScore
                })
            }
        }
        console.log(scores);

        setBoard(updatedBoard);

        setXTurn(!xTurn);
    }

    const checkWInner = (board) => {
        for(let i = 0; i < WINNING_CONDITIONS.length; i++) {
            const [x,y,z] = WINNING_CONDITIONS[i]

            if(board[x] && board[x] === board[y] && board[y] === board[z]) {
                console.log("X");
                return board[x];
            }
        }
    }

  return (
    <div className="App">
        <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
