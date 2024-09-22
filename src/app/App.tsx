import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import MainPage from "../pages/MainPage";
import { useTypedSelector } from "../types/hook.types";
import { MyDispatch } from "../redux/store";

import "./App.scss";
import { useDispatch } from "react-redux";
import { getProfileRequest } from "../redux/actions/authActions";
import { useEffect } from "react";


const App = () => {

  const dispatch: MyDispatch = useDispatch();

  const isOpen = useTypedSelector((state) => state.modal?.isOpen);

  useEffect(()=>{dispatch(getProfileRequest())}, [])

  
  return (
    <>
        {isOpen && <AuthForm />}
        <Header />
        <MainPage />
    </>
  );
};

export default App;
