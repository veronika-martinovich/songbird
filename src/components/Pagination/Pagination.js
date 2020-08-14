import React from "react";
import { birdsCategories } from "./constants";
import "./Pagination.scss";

export const Pagination = ({ currentPageId }) => {
  return (
    <ul className="pagination">
      {birdsCategories.map((item, index) => (
        <li
          className={
            currentPageId === item.category
              ? "pagination__item pagination__item_active"
              : "pagination__item"
          }
          key={index}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
