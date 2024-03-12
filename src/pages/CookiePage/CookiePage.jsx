import cookie from "../../img/cookie.png";

import "./CookiePage.css";
export const CookiePage = ({ onClick }) => {
  return (
    <div className="Main-page">
      <p className="Main-title">
        Unlock the secrets of the day with our prediction:
      </p>
      <img
        src={cookie}
        alt="start button"
        className="Cookie"
        onClick={onClick}
        width="500px"
      />
    </div>
  );
};
