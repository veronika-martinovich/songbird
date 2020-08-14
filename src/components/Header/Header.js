import React from "react";
import { useSelector } from "react-redux";
import { Logo } from "../Logo/Logo";
import { Score } from "../Score/Score";
import { Pagination } from "../Pagination/Pagination";
import { appStateSelector } from "../../reducers/app/appReducer";
import { birdsSelector } from "../../reducers/birds/birdsReducer";
import "./Header.scss";

export const Header = () => {
  const { totalScore } = useSelector(appStateSelector);
  const { currentCategory } = useSelector(birdsSelector);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Score score={totalScore} />
      </div>
      <Pagination currentPageId={currentCategory} />
    </header>
  );
};
