import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "first") {
    console.log("first wykonuje");
    return {
      firstTeamInput: action.value,
      secondTeamInput: state.secondTeamInput,
    };
  }
  if (action.type === "second") {
    console.log("second wykonuje");
    return {
      firstTeamInput: state.firstTeamInput,
      secondTeamInput: action.value,
    };
  }
  return state;
};
const useShowError = (setSaveState) => {
  const [errorState, setErrorState] = useState(false);
  const [dataInputs, setDataInput] = useReducer(reducer, {
    firstTeamInput: "",
    secondTeamInput: "",
  });
  const inputLoginHandler = (event) => {
    setDataInput({ type: "first", value: event.target.value });
    setSaveState(false);
  };
  const inputPasswordHandler = (event) => {
    setDataInput({ type: "second", value: event.target.value });
    setSaveState(false);
  };
  const saveClickButton = () => {
    if (dataInputs.firstTeamInput && dataInputs.secondTeamInput) {
      setSaveState(true);
    } else {
      setErrorState(true);
      setTimeout(() => {
        setErrorState(false);
      }, 1000);
    }
  };
  return {
    inputLoginHandler,
    inputPasswordHandler,
    saveClickButton,
    errorState,
  };
};

export default useShowError;
