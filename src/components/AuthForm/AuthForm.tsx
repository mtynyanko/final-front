import { SubmitHandler, useForm } from "react-hook-form";
import "./AuthForm.scss";

interface FormFields {
  email: string;
  password: string;
}

const AuthForm = () => {
  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: {},
  });

  const submit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="background">
      <div className="modal-window">
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
        </form>
      </div>
    </div>
  );
};
export default AuthForm;
