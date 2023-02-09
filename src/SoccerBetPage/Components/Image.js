import "./Image.css";

const Image = (props) => {
  return (
    <img src={props.src} className={props.className} alt={props.alt}></img>
  );
};
export default Image;
