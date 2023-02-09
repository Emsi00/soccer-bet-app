import "./Input.css";

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      className={props.className}
      type={props.type}
      value={props.value}
      onClick={props.onClick}
      min={props.min}
      maxLength={props.maxLength}
      pattern={props.pattern}
      ref={props.ref}
    ></input>
  );
};

export default Input;
