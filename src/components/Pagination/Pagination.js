import React from "react";
import { birdsCategories } from "./constants";
import "./Pagination.scss";

export const Pagination = () => {
  return (
    <ul className="pagination">
      {birdsCategories.map((item, index) => (
        <li className="pagination__item" key={index}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};
