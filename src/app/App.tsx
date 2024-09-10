import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import MainPage from "../pages/MainPage";

import "./App.scss";

const App = () => {

  return (
    <>
      <AuthForm />
      <Header />
      <MainPage />
    </>
  );
};

export default App;
