import DateForm from "../DateForm/DateForm";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="title-block">
          <MenuIcon />
          <h3 className="page-name">New Taganrog Times</h3>
          <PersonIcon />
        </div>
        <DateForm />
      </div>
    </>
  );
};

export default Header;
