import {useState} from 'react';

function Square({value, onSquareClick}) {
  // const [value, setValue]=useState(null);

  // function handleClick(){
  //   setValue('X');
  // }
  // Since we are storing state in the parent, we should not be setting values from within the `Square` compoment
  return <button className="square" onClick={onSquareClick}>
          {value}
         </button>

}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
    // Destructuring: Allows me to unpack an array or object and put whatever is inside them into different variables. In this case, we know useState will return a variable and a function, so we store them into 2 constants called value and setValue
  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i]="X";
    setSquares(nextSquares);
  }
    return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        {/* Next, you will need to pass that i to handleClick. You could try to set the onSquareClick prop of square to be handleClick(0) directly in the JSX like this, but it won’t work:

        <Square value={squares[0]} onSquareClick={handleClick(0)} />

        Here is why this doesn’t work. The handleClick(0) call will be a part of rendering the board component. Because handleClick(0) alters the state of the board component by calling setSquares, your entire board component will be re-rendered again. But this runs handleClick(0) again, leading to an infinite loop.
        
        When you were passing onSquareClick={handleClick}, you were passing the handleClick function down as a prop. You were not calling it! But now you are calling that function right away—notice the parentheses in handleClick(0)—and that’s why it runs too early. You don’t want to call handleClick until the user clicks!*/}
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>

      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>

      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>

      </div>


    </>
  );
}
