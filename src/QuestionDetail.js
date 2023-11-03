import { useContext, useState } from "react";
import { ScoreContext } from "./ScoreContext";

const QuestionDetail = ({ oneObj }) => {
  const { score, increaseScore, disabled, trueDisable } =
    useContext(ScoreContext);
  //   const [disabled, setDisabled] = useState(false);

  //
  console.log(score);
  console.log(disabled);
  //

  const handleAnswerSelection = (index) => {
    if (oneObj.options[index] === oneObj.answer) {
      increaseScore();
    }
    trueDisable();
  };

  return (
    <>
      <li key={oneObj._id}>
        <p>{oneObj.question}</p>

        {oneObj.options.map((oneAns, index) => (
          <p key={index}>
            <input
              type="checkbox"
              disabled={disabled}
              onChange={() => handleAnswerSelection(index)}
            />
            {oneAns}
          </p>
        ))}
      </li>
    </>
  );
};

export { QuestionDetail };
