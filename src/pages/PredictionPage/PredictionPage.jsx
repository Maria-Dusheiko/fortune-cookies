import { Prediction } from "../../components/Prediction/Prediction";
import { ResetButton } from "../../components/ResetBtn/ResetBtn";

import "./PredictionPage.css";
export const PredictionPage = ({ prediction, onClick }) => {
  return (
    <div className="Prediction-page">
      <Prediction prediction={prediction} />
      <ResetButton onClick={onClick} />
    </div>
  );
};
