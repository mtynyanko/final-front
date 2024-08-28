import Header from "../components/Header/Header.tsx";
import MainPage from "../pages/MainPage/MainPage.tsx";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header title="The Taganrog Times" />
      <MainPage />
    </>
  );
};

export default App;
