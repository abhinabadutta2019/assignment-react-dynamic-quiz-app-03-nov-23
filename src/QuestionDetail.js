import { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

const QuestionDetail = ({ oneObj }) => {
  //
  const { score, increaseScore } = useContext(ScoreContext);
  //
  console.log(score, "score");
  //   console.log(oneObj);
  const handleAnswerSelection = (index) => {
    // console.log("Selected answer:", oneObj.options[index]);
    if (oneObj.options[index] === oneObj.answer) {
      increaseScore();
    }
  };

  //   console.log(score, "score");
  return (
    <>
      <li key={oneObj._id}>
        <p>{oneObj.question}</p>

        {oneObj.options.map((oneAns, index) => (
          <p key={index}>
            <input
              type="checkbox"
              onClick={() => handleAnswerSelection(index)}
            />

            {oneAns}
          </p>
        ))}
      </li>
    </>
  );
};

export { QuestionDetail };
