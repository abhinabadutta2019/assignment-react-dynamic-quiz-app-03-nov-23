import { useState, useContext } from "react";
import data from "./Data.json";
import { QuestionDetail } from "./QuestionDetail";
import { ScoreContext } from "./ScoreContext";

function App() {
  //
  const { score, falseDisable } = useContext(ScoreContext);
  //
  const objectList = data.questions;
  const [position, setPosition] = useState(0);
  const oneObj = objectList[position];

  // console.log(position);
  //
  const nextButton = () => {
    setPosition(position + 1);
    //
    falseDisable();
  };
  //
  // const previousButton = () => {
  //   setPosition(position - 1);
  // };

  return (
    <div className="App">
      <QuestionDetail oneObj={oneObj} />

      <button disabled={position >= objectList.length - 1} onClick={nextButton}>
        next
      </button>
    </div>
  );
}

export default App;
