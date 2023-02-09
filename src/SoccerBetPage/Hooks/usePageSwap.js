// import FriendsBar from "../LoggedMainPage/MainElements/FriendsBar";

const usePageSwap = (setPage, setFriendsBar, friendsBar) => {
  const clickHandlerAboutUs = () => {
    setPage("aboutUs");
  };
  const clickHandlerMatches = () => {
    setPage("matches");
  };
  const clickHandlerRanking = () => {
    setPage("ranking");
  };
  const clickHandlerMyAccount = () => {
    setFriendsBar(!friendsBar);
    console.log(friendsBar);
  };
  return {
    clickHandlerAboutUs,
    clickHandlerMatches,
    clickHandlerRanking,
    clickHandlerMyAccount,
  };
};

export default usePageSwap;
