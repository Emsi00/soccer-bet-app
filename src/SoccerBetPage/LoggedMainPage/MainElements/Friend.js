import "./Friend.css";
import Image from "../../Components/Image";
const Friend = (props) => {
  return (
    <div className="myProfile">
      <div className="friendImageDiv">
        <Image
          className="friendPhoto"
          src={require(`../../Images/Icons/${props.photo}`)}
        />
      </div>
      <div className="friendInfoDiv">
        <div className="friendNameDiv">{props.nickname}</div>
        <div className="friendOfflineDiv">{`Offline ${props.offline} minutes ago`}</div>
      </div>
    </div>
  );
};

export default Friend;
