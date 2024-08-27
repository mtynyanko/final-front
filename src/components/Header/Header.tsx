import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import "./Header.scss";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const todayDate = (): string => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div className="header">
        <div className="title-block">
          <MenuIcon />
          <h3 className="page-name">{title}</h3>
          <PersonIcon />
        </div>
        <div className="date-block">{todayDate()}</div>
      </div>
    </>
  );
};

export default Header;
