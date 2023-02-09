import { useEffect, useState } from "react";
import "./MainFrame.css";
import Header from "./MainElements/Header";
import MenuBar from "./MainElements/MenuBar";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import MatchesPage from "../MatchesPage/MatchesPage";
import usePageSwap from "../Hooks/usePageSwap";
import FriendsBar from "./MainElements/FriendsBar";

const MainFrame = (props) => {
  const [friendsBar, setFriendsBar] = useState(false);
  const [pageState, setPageState] = useState("aboutUs");
  const {
    clickHandlerAboutUs,
    clickHandlerMatches,
    clickHandlerRanking,
    clickHandlerMyAccount,
  } = usePageSwap(setPageState, setFriendsBar, friendsBar);
  return (
    <div>
      <Header>
        <MenuBar
          aboutUsClick={clickHandlerAboutUs}
          matchesClick={clickHandlerMatches}
          rankingClick={clickHandlerRanking}
          myAccountClick={clickHandlerMyAccount}
        ></MenuBar>
      </Header>
      <div className={friendsBar ? "content minimalized" : "content"}>
        {pageState === "aboutUs" && <AboutUsPage />}
        {pageState === "matches" && <MatchesPage />}
      </div>
      <FriendsBar className={!friendsBar} />
      {/* {errorMessage && (
        <ErrorMessage>Pola wyniku nie mogą być puste</ErrorMessage>
      )} */}
    </div>
  );
};

export default MainFrame;
