import React, { useState } from "react";

import { CookiePage } from "./pages/CookiePage/CookiePage";
import { PredictionPage } from "./pages/PredictionPage/PredictionPage";
import { predictions } from "./data/prediction";
import "./App.css";

export const App = () => {
  const [prediction, setPrediction] = useState("");
  const [isShowCookie, setIsShowCookie] = useState(true);

  const getRandomPrediction = () => {
    const randomIndex = Math.floor(Math.random() * predictions.length);
    setPrediction(predictions[randomIndex]);
    setIsShowCookie(!isShowCookie);
  };

  return (
    <div className="App">
      {isShowCookie && <CookiePage onClick={getRandomPrediction} />}
      {!isShowCookie && (
        <PredictionPage
          prediction={prediction}
          onClick={() => setIsShowCookie(!isShowCookie)}
        />
      )}
    </div>
  );
};
