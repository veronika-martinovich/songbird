import React from "react";
import { questions } from "./constants";
import "./Pagination.scss";

export const Pagination = () => {
  return (
    <ul className="pagination">
      {questions.map((item) => (
        <li className="pagination__item">{item}</li>
      ))}
    </ul>
  );
};
