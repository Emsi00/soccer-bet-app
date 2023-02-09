// import styled from "styled-components";
import { useContext } from "react";
import "./FriendsBar.css";
import Friend from "./Friend";
import AppContext from "../../AuthContext/AppContext";
import Image from "../../Components/Image";
// const SideBar = styled.div`
//   position: fixed;
//   top: 100px;
//   right: 0;
//   background-color: rgb(25, 25, 134);
//   width: ${(turnedOff) => {
//     return turnedOff ? "0%" : "20%";
//   }};
//   height: 100vh;
//   transition: 1s;
//   border-top: 1px solid white;
// `;
// const Pies = styled(SideBar)``;
const FriendsBar = (props) => {
  const ctx = useContext(AppContext);
  return (
    <div className={props.className ? "friendsBar turnedOFF" : "friendsBar"}>
      {!props.className &&
        ctx.friends.map((friend) => {
          return (
            <div className="myProfile">
              <div className="friendImageDiv">
                <Image
                  className="friendPhoto"
                  src={require(`../../Images/Icons/${friend.photo}`)}
                />
              </div>
              <div className="friendInfoDiv">
                <div className="friendNameDiv">{friend.nickname}</div>
                <div className="friendOfflineDiv">{`Offline ${friend.offline} minutes ago`}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FriendsBar;
// turnedOff={visibleState}
