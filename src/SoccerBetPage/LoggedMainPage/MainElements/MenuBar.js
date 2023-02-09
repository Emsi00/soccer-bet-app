import "./MenuBar.css";
import Button from "../../Components/Button";
const MenuBar = (props) => {
  return (
    <div className="menuBar">
      <Button className="menuBarButton" onClick={props.aboutUsClick}>
        O nas
      </Button>
      <Button className="menuBarButton" onClick={props.matchesClick}>
        Mecze
      </Button>
      <Button className="menuBarButton" onClick={props.rankingClick}>
        Ranking
      </Button>
      <Button className="menuBarButton" onClick={props.myAccountClick}>
        Friends
      </Button>
    </div>
  );
};

export default MenuBar;
