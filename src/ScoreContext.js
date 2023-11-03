import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();
//

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  //
  const increaseScore = () => {
    setScore(score + 1);
  };
  //
  return (
    <ScoreContext.Provider value={{ score, increaseScore }}>
      {children}
    </ScoreContext.Provider>
  );
  //
};

export { ScoreContext, ScoreContextProvider };
