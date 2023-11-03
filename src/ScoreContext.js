import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();
//

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  //
  const increaseScore = () => {
    setScore(score + 1);
  };
  //
  const trueDisable = () => {
    setDisabled(true);
  };
  //
  const falseDisable = () => {
    setDisabled(false);
  };
  //
  return (
    <ScoreContext.Provider
      value={{ score, increaseScore, disabled, trueDisable, falseDisable }}
    >
      {children}
    </ScoreContext.Provider>
  );
  //
};

export { ScoreContext, ScoreContextProvider };
