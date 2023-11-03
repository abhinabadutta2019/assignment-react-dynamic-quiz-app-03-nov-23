import { useState, useContext } from "react";
import data from "./Data.json";
import { QuestionDetail } from "./QuestionDetail";
import { ScoreContext } from "./ScoreContext";
//
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS

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
    <div className="container mt-5">
      {" "}
      {/* Use Bootstrap container class */}
      <h1 className="display-4">Brisk Quiz App</h1> <br />
      <br />
      {/* Use Bootstrap typography classes */}
      {showRes ? (
        <div>
          <h2>Your Score</h2>
          <h4>
            {score} out of {objectList.length}
          </h4>

          <button className="btn btn-success" onClick={tryAgainHandler}>
            Try Again
          </button>
        </div>
      ) : (
        <>
          <div>
            <QuestionDetail oneObj={oneObj} />
            <button
              className="btn btn-outline-primary"
              disabled={position >= objectList.length - 1}
              onClick={nextButton}
            >
              next
            </button>
            {/* Get the result button, only cisible on last page */}
            {position === objectList.length - 1 && (
              <div>
                <p>Get Your score:</p>
                <button className="btn btn-success" onClick={showResHandler}>
                  Show Result
                </button>
              </div>
            )}

            <div>
              <span>Progress : </span>
              <span>
                You are at question number {position + 1} on total{" "}
                {objectList.length} questions.
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
