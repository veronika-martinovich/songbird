import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { actionUpdateDefaultAppData } from "../../reducers/app/appActions";
import { actionUpdateDefaultBirdsData } from "../../reducers/birds/birdsActions";
import { appStateSelector } from "../../reducers/app/appReducer";
import { MAX_SCORE } from "../../App/constants";
import Ornithologist from "../../assets/ornithologist.gif";
import "./QuizeResult.scss";

export const QuizeResult = () => {
  const { totalScore } = useSelector(appStateSelector);
  const dispatch = useDispatch();
  const isResultMax = totalScore === MAX_SCORE ? true : false;

  const handleAgainClick = () => {
    dispatch(actionUpdateDefaultAppData());
    dispatch(actionUpdateDefaultBirdsData());
  };

  return (
    <div className="result">
      <p className="result__title">
        {isResultMax ? "Орнитолог от Бога!" : "Поздравляем!"}
      </p>
      {isResultMax && (
        <img src={Ornithologist} alt="ornithologist" className="result__img" />
      )}
      <p className="result__text">
        {isResultMax
          ? "Вы набрали максимальное количество баллов!"
          : `Вы прошли викторину и набрали ${totalScore} из ${MAX_SCORE} возможных
        баллов.`}
      </p>
      <hr className="result__line" />
      {!isResultMax && (
        <PrimaryButton
          onPrimaryButtonClick={handleAgainClick}
          isButtonActive={true}
          buttonName="Попробовать еще раз!"
        />
      )}
    </div>
  );
};
