import React from "react";

export const QuizeResult = () => {
  return (
    <div className="result">
      <p>Поздравляем!</p>
      <p>
        Вы прошли викторину и набрали {} из {} возможных баллов.
      </p>
    </div>
  );
};
