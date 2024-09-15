import { useDispatch } from "react-redux";
import { MyDispatch } from "../../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { authRequest } from "../../redux/actions/authActions";

import './RegistrationForm.scss';

interface FormFields {
    email: string;
    login: string;
    password: string;
}

const RegistrationForm = () => {

    const dispatch: MyDispatch = useDispatch()  
    const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { register, handleSubmit } = useForm<FormFields>({
      defaultValues: {},
    });
  
    const submit: SubmitHandler<FormFields> = (data) => {
      dispatch(authRequest(data));
      console.log(data);
    };
    
    return (
        <form className="reg-form" onSubmit={handleSubmit(submit)}>
          <label className="input-title">Email Address</label>
          <input type="text" className="input-field" {...register("email" , 
          { required: true, pattern: {
            value: emailPattern,
            message: 'Please enter a valid email',
        } })} />
          <label className="input-title">Login</label>
          <input type="text" className="input-field" {...register("login"), { required: true }} />
          <label className="input-title">Password</label>
          <input
            type="password"
            className="input-field"
            {...register("password"), { required: true }}
          />
          <button className="submit-button">Create account</button>
        </form>
    )
}
export default RegistrationForm;