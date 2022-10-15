import "./Board.css"

import { Box } from "./Box"

export const Board = ({ board, onClick }) => {
    return (
        <div className="board">
            {board.map((value, i) => {
                return <Box value={value} onClick={() => value === null && onClick(i)} />
            })}
        </div>
    )
}