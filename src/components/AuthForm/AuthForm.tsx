import { MyDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";

import { closeModalWindow } from "../../redux/actions/modalActions";
import LoginForm from "../LoginForm";

import "./AuthForm.scss";
import { useState } from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { useTypedSelector } from "../../types/hook.types";

const AuthForm = () => {
  const dispatch: MyDispatch = useDispatch()

  const authorized = useTypedSelector((state) => state.auth.authorized);

  const [state, setState] = useState(false);

  const switchButton = () => {
    setState(state => !state);
  }

  if (authorized) {
    dispatch(closeModalWindow())
  }

  return (
    <div className="background" onClick={()=>dispatch(closeModalWindow())}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {state ? <RegistrationForm/> : <LoginForm />}
        <input className="submit-button newacc-button" type="button" 
        value={state ? "Go back" : "Create new account"}
        onClick= {switchButton}/>
      </div>
    </div>
  );
};
export default AuthForm;
