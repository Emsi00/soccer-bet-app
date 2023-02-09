import { useEffect, useState } from "react";

import "./App.css";

import LoginFrame from "./SoccerBetPage/LoginPage/LoginFrame";
import MainFrame from "./SoccerBetPage/LoggedMainPage/MainFrame";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const getState = (value) => {
    setIsLogged(value);
  };

  return (
    <div className="mainDiv">
      {!isLogged && <LoginFrame onSave={getState} />}
      {isLogged && <MainFrame />}
    </div>
  );
};

export default App;
