import React from "react";
import { Logo } from "../Logo/Logo";
import { Score } from "../Score/Score";
import { Pagination } from "../Pagination/Pagination";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Score />
      </div>

      <Pagination />
    </header>
  );
};
