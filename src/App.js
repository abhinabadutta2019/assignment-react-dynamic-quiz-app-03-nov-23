import { useState, useContext } from "react";
import data from "./Data.json";
import { QuestionDetail } from "./QuestionDetail";
import { ScoreContext } from "./ScoreContext";

function App() {
  //
  const { score, scoreStartAgain, falseDisable } = useContext(ScoreContext);
  //
  const objectList = data.questions;
  const [position, setPosition] = useState(0);

  const [showRes, setShowRes] = useState(false);
  //
  const oneObj = objectList[position];

  //

  //
  const showResHandler = () => {
    setShowRes(true);
  };
  // console.log(position);
  //
  const nextButton = () => {
    setPosition(position + 1);
    //
    falseDisable();
  };
  //
  const tryAgainHandler = () => {
    setPosition(0);
    scoreStartAgain();
    setShowRes(false);
  };
  //
  // const previousButton = () => {
  //   setPosition(position - 1);
  // };

  return (
    <div className="App">
      <h1>Brisk Quiz App</h1>
      {showRes ? (
        <div>
          <h2>Your Score</h2>
          <h4>{score}</h4>

          <button onClick={tryAgainHandler}>Try Again</button>
        </div>
      ) : (
        <>
          <div>
            <QuestionDetail oneObj={oneObj} />
            <button
              disabled={position >= objectList.length - 1}
              onClick={nextButton}
            >
              next
            </button>
            {/* Get the result button, only cisible on last page */}
            {position === objectList.length - 1 && (
              <div>
                <p>Get Your score:</p>
                <button onClick={showResHandler}>Show Result</button>
              </div>
            )}

            <p>
              You are at question number {position + 1} on total
              {objectList.length} questions :
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
