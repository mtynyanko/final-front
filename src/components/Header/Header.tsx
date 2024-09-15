import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import DateBlock from "../DateBlock";

import "./Header.scss";
import { MyDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { openModalWindow } from "../../redux/actions/modalActions";
import { useTypedSelector } from "../../types/hook.types";
import Avatar from "../Avatar";
import { signOut } from "../../redux/actions/authActions";

const Header = () => {
  const dispatch: MyDispatch = useDispatch();

  const authorized = useTypedSelector((state) => state.auth.authorized);
  const login = useTypedSelector((state) => state.auth.login);
  const avatar = useTypedSelector((state) => state.auth.avatar);

  const logOut = () => {
    dispatch(signOut())
    localStorage.clear()
  }

  return (
    <>
      <div className="header">
        <div className="title-block">
          <MenuIcon />
          <h3 className="page-name">New Taganrog Times</h3>
          {
            authorized && login ? 
            <div className="user-logged">
              <button className="sign-out" onClick={()=>logOut()}>sign out</button>
              <Avatar image={avatar} username={login} />
            </div> :
            <div className="user" onClick={() => dispatch(openModalWindow())}>
            <PersonIcon />
            </div>
          }
        </div>
        <DateBlock />
      </div>
    </>
  );
};
export default Header;
