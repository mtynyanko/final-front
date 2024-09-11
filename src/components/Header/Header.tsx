import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import DateBlock from "../DateBlock";

import "./Header.scss";
import { MyDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { openModalWindow } from "../../redux/actions/modalActions";

const Header = () => {
  const dispatch: MyDispatch = useDispatch();

  return (
    <>
      <div className="header">
        <div className="title-block">
          <MenuIcon />
          <h3 className="page-name">New Taganrog Times</h3>
          <div className="user" onClick={() => dispatch(openModalWindow())}>
            <PersonIcon />
          </div>
        </div>
        <DateBlock />
      </div>
    </>
  );
};
export default Header;
