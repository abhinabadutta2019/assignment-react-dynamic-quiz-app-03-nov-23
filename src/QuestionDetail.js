import { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

const QuestionDetail = ({ oneObj }) => {
  //
  const { score, increaseScore } = useContext(ScoreContext);
  //   console.log(oneObj);

  //   console.log(score, "score");
  return (
    <>
      <li key={oneObj._id}>
        <p>{oneObj.question}</p>

        {oneObj.options.map((oneAns, index) => (
          <p key={index}>
            <input type="checkbox" />
            {oneAns}
          </p>
        ))}
      </li>
    </>
  );
};

export { QuestionDetail };
