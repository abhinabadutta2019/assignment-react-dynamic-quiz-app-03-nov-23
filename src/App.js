import data from "./Data.json";
import { QuestionDetail } from "./QuestionDetail";

function App() {
  const objectList = data.questions;

  return (
    <div className="App">
      <QuestionDetail objectList={objectList} />
    </div>
  );
}

export default App;
