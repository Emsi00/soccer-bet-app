import { useState, useReducer } from "react";

import "./LoginFrame.css";

import Input from "../Components/Input";
import Button from "../Components/Button";
import Image from "../Components/Image";
import useValidation from "../Hooks/useValidation";

const LoginFrame = (props) => {
  const [invalidInput, setInvalidInput] = useState(true);
  const {
    loginData,
    loginInputHandler,
    passwordInputHandler,
    loginHandler,
    makeInputCorrect,
  } = useValidation(props.onSave, setInvalidInput);
  return (
    <div className="loginFrame">
      <div className="loginDiv facebook">
        <Button className="loginBy facebookBtn">
          Zaloguj się przez Facebook'a
          <Image
            className="icon"
            src={require("../Images/Icons/facebook.png")}
          />
        </Button>
      </div>
      <div className="loginDiv instagram">
        <Button className="loginBy instagramBtn">
          Zaloguj się przez Instagrama
          <Image
            className="icon"
            src={require("../Images/Icons/instagram.png")}
          />
        </Button>
      </div>
      <div className="loginDiv loginLabel">Login</div>
      <div className="loginDiv loginInput">
        <Input
          className={
            !invalidInput
              ? "loginInputComponents invalidInput"
              : "loginInputComponent"
          }
          onChange={loginInputHandler}
          value={loginData.login ? loginData.login : ""}
          onClick={makeInputCorrect}
        />
      </div>
      <div className="loginDiv passwordLabel">Password</div>
      <div className="loginDiv passwordInput">
        <Input
          className={
            !invalidInput
              ? "loginInputComponents invalidInput"
              : "loginInputComponent"
          }
          type="password"
          onChange={passwordInputHandler}
          value={loginData.password ? loginData.password : ""}
          onClick={makeInputCorrect}
        />
      </div>
      <div className="loginDiv loginButtonDiv">
        <Button className="loginButton" onClick={loginHandler}>
          Zaloguj się
        </Button>
      </div>
    </div>
  );
};

export default LoginFrame;
