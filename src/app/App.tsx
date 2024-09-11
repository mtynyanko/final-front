import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import MainPage from "../pages/MainPage";
import { useTypedSelector } from "../types/hook.types";


import "./App.scss";

const App = () => {

  const isOpen = useTypedSelector((state) => state.modal?.isOpen);
  return (
    <>
      {isOpen && <AuthForm />}
      <Header />
      <MainPage />
    </>
  );
};

export default App;
