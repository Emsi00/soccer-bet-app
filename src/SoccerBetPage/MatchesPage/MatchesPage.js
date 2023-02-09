import { useContext } from "react";

import "./Matches.css";

import AppContext from "../AuthContext/AppContext";
import Match from "./Match";
const MatchesPage = (props) => {
  const ctx = useContext(AppContext);

  return (
    <div className="contentMatches">
      <h1>Wyróżnione spotkanie na ten tydzień!</h1>
      <ul className="matchList">
        {ctx.matches.map((match) => {
          return (
            <Match
              srcFirstTeam={require(`../Images/Flags/${match.firstLogo}`)}
              srcSecondTeam={require(`../Images/Flags/${match.secondLogo}`)}
            >{`${match.firstTeam} - ${match.secondTeam}`}</Match>
          );
        })}
      </ul>
    </div>
  );
};

export default MatchesPage;
