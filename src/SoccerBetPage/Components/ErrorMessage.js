import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  return <p className="errorMessage">{props.children}</p>;
};

export default ErrorMessage;
