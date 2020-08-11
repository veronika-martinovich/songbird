import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { actionUpdateDefaultAppData } from "../../reducers/app/appActions";
import { actionUpdateDefaultBirdsData } from "../../reducers/birds/birdsActions";
import { appStateSelector } from "../../reducers/app/appReducer";
import { MAX_SCORE } from "../../App/constants";
import "./QuizeResult.scss";

export const QuizeResult = () => {
  const { totalScore } = useSelector(appStateSelector);
  const dispatch = useDispatch();

  const handleAgainClick = () => {
    dispatch(actionUpdateDefaultAppData());
    dispatch(actionUpdateDefaultBirdsData());
  };

  return (
    <div className="result">
      <p className="result__title">Поздравляем!</p>
      <p className="result__text">
        Вы прошли викторину и набрали {totalScore} из {MAX_SCORE} возможных
        баллов.
      </p>
      <hr className="result__line" />
      <PrimaryButton
        onPrimaryButtonClick={handleAgainClick}
        isButtonActive={true}
        buttonName="Попробовать еще раз!"
      />
    </div>
  );
};
