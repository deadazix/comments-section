import classes from "./CommentScore.module.css";
import btnAdd from "../../assets/images/icon-plus.svg";
import btnMinus from "../../assets/images/icon-minus.svg";
import React from "react";

const CommentScore = (probs) => {
  return (
    <div className={classes.score}>
        <div className={classes.container}>

      <img src={btnAdd} alt="button plus" />
      <span>{probs.score}</span>
      <img src={btnMinus} alt="button minus" />
        </div>
    </div>
  );
};
export default CommentScore;
