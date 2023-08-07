import React from "react";
import success from "../images/success.png";
import error from "../images/error.png";
import closeIcon from "../images/close-Icon.svg";
import { useLocation, useNavigate } from "react-router-dom";

function InfoTooltip(props) {
  const location = useLocation();
  const history = useNavigate();

  function redirectPopup() {
    if (props.status) {
      props.onClose();

      if (location.pathname === "/sign-up") {
        history("/sign-in", { replace: true });
      }
    }
    props.onClose();
  }

  return (
    <div
      id={props.id}
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.onClose}>
          <img className="popup__close-icon" src={closeIcon} alt="Закрыть" />
        </button>

        <div className="auth__info">
          {props.status ? (
            <>
              <img src={success} className="auth__status-icon" />
              <p className="auth__status-text">
                Вы успешно зарегистрировались!
              </p>
            </>
          ) : (
            <>
              <img src={error} className="auth__status-icon" />
              <p className="auth__status-text">
                Что-то пошло не так! Попробуйте ещё раз.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
