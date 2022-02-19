import { useState } from "react";
import { InputContext } from "./mainContext";
const InputState = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isHide, setIsHide] = useState(true);
  const [res, setRes] = useState({});

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  const hideHandler = () => {
    setIsHide(!isHide);
  };
  const crossHandler = () => {
    setRes({});
  };

  return (
    <InputContext.Provider
      value={{
        isLogin,
        isHide,
        res,
        crossHandler,
        setRes,
        loginHandler,
        hideHandler,
      }}
    >
      {props.children}
    </InputContext.Provider>
  );
};

export default InputState;
