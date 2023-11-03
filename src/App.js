import { useState } from "react";
import data from "./Data.json";
import { QuestionDetail } from "./QuestionDetail";

function App() {
  const objectList = data.questions;
  const [position, setPosition] = useState(0);
  const oneObj = objectList[position];

  console.log(position);
  const nextButton = () => {
    setPosition(position + 1);
  };
  const previousButton = () => {
    setPosition(position - 1);
  };

  return (
    <div className="App">
      <QuestionDetail oneObj={oneObj} />

      <button disabled={position <= 0} onClick={previousButton}>
        previous
      </button>
      <button disabled={position >= objectList.length - 1} onClick={nextButton}>
        next
      </button>
    </div>
  );
}

export default App;
