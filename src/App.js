import { useState } from "react";
import data from "./Data.json";
import { QuestionDetail } from "./QuestionDetail";

function App() {
  const objectList = data.questions;
  const oneObj = objectList[0];
  // const [position, setPosition] = useState(0);
  return (
    <div className="App">
      <QuestionDetail oneObj={oneObj} />
    </div>
  );
}

export default App;
