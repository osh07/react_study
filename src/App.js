import Board from "./components/Board";

/*import "./App.css"
import Background from "./components/Background";

function App() {
  return (
    <div className="background">
      <Background />
    </div>
  );
}
*/
function App(){
  return(
    <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          game-info
        </div>
    </div>
  );
}
export default App;