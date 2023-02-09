import "./Button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.type ? props.type : "text"}
    >
      {props.children}
    </button>
  );
};

export default Button;
