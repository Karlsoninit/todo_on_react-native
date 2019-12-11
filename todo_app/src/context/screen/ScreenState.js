import React, { useReducer } from "react";
import { ScreenContext } from "./screenContext";
import { screenReducer } from "./ScreenReducer";
import Type from "../type";

const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = id => {
    console.log("inner ScreenState --- id ", id);
    return dispatch({ type: Type.CHANGE_SCREEN, payload: id });
  };

  return (
    <ScreenContext.Provider value={{ changeScreen, getId: state }}>
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenState;
