import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "login") {
    return {
      login: action.val,
      password: state.password,
      isValid: state.isValid,
    };
  }
  if (action.type === "password") {
    return { login: state.login, password: action.val, isValid: state.isValid };
  }
  if (action.type === "loginClick") {
    return { login: state.login, password: state.password, isValid: true };
  }
  if (action.type === "resetInputs") {
    return { login: "", password: "" };
  }
  return state;
};
const useValidation = (setValidation, setInputError, setErrorMessage) => {
  const [loginData, setLoginData] = useReducer(reducer, {
    login: "",
    password: "",
    isValid: false,
  });
  const loginInputHandler = (event) => {
    setLoginData({ type: "login", val: event.target.value });
  };
  const passwordInputHandler = (event) => {
    setLoginData({ type: "password", val: event.target.value });
  };
  const loginHandler = async () => {
    const response = await fetch(
      "https://soccerbet-web-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();
    const loadedLogins = [];
    const loadedPasswords = [];
    for (const key in data) {
      loadedLogins.push(data[key].login);
      loadedPasswords.push(data[key].password);
    }
    const index = loadedLogins.indexOf(loginData.login);
    if (index !== -1) {
      const login = loadedLogins[index];
      const password = loadedPasswords[index];
      if (login === loginData.login && password === loginData.password) {
        setValidation(true);
      }
    } else {
      setInputError(false);
      setLoginData({ type: "resetInputs" });
    }
  };
  const makeInputCorrect = () => {
    setInputError(true);
  };
  return {
    loginData,
    loginInputHandler,
    passwordInputHandler,
    loginHandler,
    makeInputCorrect,
  };
};

export default useValidation;
