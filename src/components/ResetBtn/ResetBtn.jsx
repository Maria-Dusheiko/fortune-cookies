import cookie from "../../img/cookie.png";

import "./ResetBtn.css";

export const ResetButton = ({ onClick }) => {
  return (
    <div className="ResetBtn">
      <p className="ResetTitle">Try Again :</p>
      <img
        src={cookie}
        alt="reset button"
        onClick={onClick}
        className="ResetImg"
      />
    </div>
  );
};
