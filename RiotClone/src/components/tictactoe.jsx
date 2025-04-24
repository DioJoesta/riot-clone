import { useState } from "react"
function Square ({value, onSquareClick}) {
    
   

    return(
        <button onClick={onSquareClick} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded lg:h-[150px] md:h-[150px] lg:w-[150px] md:w-[150px] w-[100px] h-[100px]">{value}</button>

    )
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
        <div className="  w-[150px] flex justify-center text-white text-[20px] ">{status}</div>
          <div className="board-row bg-orange-400 lg:w-[600px] md:w-[600px] lg:h-[150px] md:h-[150px] w-[350px] h-[100px] flex justify-around">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row bg-red-400 lg:w-[600px] md:w-[600px] lg:h-[150px] md:h-[150px] w-[350px] h-[100px] flex justify-around">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row bg-purple-400 lg:w-[600px] md:w-[600px] lg:h-[150px] md:h-[150px] w-[350px] h-[100px] flex justify-around">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game bg-blue-900 pt-[100px] w-full lg:h-[100vh] md:h-[100vh] flex lg:flex-row md:flex-row flex-col justify-around items-center ">
      <div className="game-board lg:mb-0 md:mb-0 mb-5 bg-purple-800 rounded-[10px] border lg:w-[600px] md:w-[600px] lg:h-[600px] md:h-[600px] w-[400px] h-[600px] flex flex-col items-center justify-around">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info lg:translate-x-[-300px] bg-green-900 rounded-[10px] flex justify-around items-center text-white w-[200px] h-[300px]">
        <ol className="flex flex-col justify-around items-center w-[150px] h-[250px]">{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
