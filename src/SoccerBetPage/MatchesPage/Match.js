import { useState, useRef } from "react";
import "./Match.css";
import Image from "../Components/Image";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useShowError from "../Hooks/useShowError";
import ErrorMessage from "../Components/ErrorMessage";
const Match = (props) => {
  const [saveState, setSaveState] = useState(false);
  const {
    inputLoginHandler,
    inputPasswordHandler,
    saveClickButton,
    errorState,
  } = useShowError(setSaveState);

  return (
    <li className="singleMatch">
      <h1>{props.children}</h1>
      <div className="matchCenterList">
        <Image src={props.srcFirstTeam} className="logoIcon" />
        <Input
          className="scoreInput"
          min={0}
          maxLength={1}
          onChange={inputLoginHandler}
        />
        <label>vs</label>
        <Input
          className="scoreInput"
          min={0}
          maxLength={1}
          onChange={inputPasswordHandler}
        />
        <Image src={props.srcSecondTeam} className="logoIcon" />
      </div>
      <div>
        <Button
          className={
            saveState ? "saveSingleMatchButton saved" : "saveSingleMatchButton"
          }
          onClick={saveClickButton}
        >
          {saveState ? "Zapisano" : "Zapisz"}
        </Button>
      </div>
      {errorState && <ErrorMessage>Wypełnij pola wyników</ErrorMessage>}
    </li>
  );
};

export default Match;
