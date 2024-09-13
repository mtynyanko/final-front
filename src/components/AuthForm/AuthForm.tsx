import { SubmitHandler, useForm } from "react-hook-form";
import "./AuthForm.scss";
import { MyDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { closeModalWindow } from "../../redux/actions/modalActions";
import { authRequest } from "../../redux/actions/authActions";
import { useTypedSelector } from "../../types/hook.types";

interface FormFields {
  email: string;
  password: string;
}

const AuthForm = () => {

  const dispatch: MyDispatch = useDispatch()

  const authorized = useTypedSelector((state) => state.auth.authorized);
  const login = useTypedSelector((state) => state.auth.login);
  const error = useTypedSelector((state) => state.auth.error);

  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {},
  });

  const submit: SubmitHandler<FormFields> = (data) => {
    dispatch(authRequest(data));
    console.log(data);
  };
  
  return (
    <div className="background" onClick={()=>dispatch(closeModalWindow())}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <form className="auth-form" onSubmit={handleSubmit(submit)}>
        <h2 className="form-header">Log in or create account</h2>
          <label className="input-title">Email Address</label>
          <input type="text" className="input-field" {...register("email")} />
          <label className="input-title">Password</label>
          <input
            type="password"
            className="input-field"
            {...register("password")}
          />
          <button className="submit-button">Continue</button>
          {authorized && <p className="log">success {login}</p>}
          {error && <p className="error">{error.message}</p>}
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
