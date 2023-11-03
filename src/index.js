import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ScoreContextProvider } from "./ScoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ScoreContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ScoreContextProvider>
);
