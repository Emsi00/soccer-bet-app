import React from "react";

const AppContext = React.createContext({
  matches: [
    {
      firstTeam: "Real Madryt",
      firstLogo: "Real.jpg",
      secondTeam: "FC Barcelona",
      secondLogo: "Barcelona.jpg",
    },
    {
      firstTeam: "Chelsea Londyn",
      firstLogo: "Chelsea.jpg",
      secondTeam: "Arsenal Londyn",
      secondLogo: "Arsenal.jpg",
    },
    {
      firstTeam: "Bayern",
      firstLogo: "Bayern.jpg",
      secondTeam: "Borussia",
      secondLogo: "Borussia.jpg",
    },
  ],
  friends: [
    { nickname: "Mateusz", offline: 7, photo: "kot.jpg" },
    { nickname: "Oliwiaa", offline: 32, photo: "zordon.jpg" },
    { nickname: "Maja", offline: 58, photo: "pies.jpg" },
  ],
});

export default AppContext;
