import classes from "./CommentScore.module.css";
import btnAdd from "../../assets/images/icon-plus.svg";
import btnMinus from "../../assets/images/icon-minus.svg";
import React,{useContext,useMemo} from "react";
import DataContext from "../../contexts/data-context";

const CommentScore = (probs) => {
  let allowedToAdd = true
  let allowedTomin = true
  const dataCTX = useContext(DataContext)
  const innitialScore = useMemo(()=>{
    return probs.score
  },[])
  const calcHandler = e=>{
  
    if(innitialScore+1===probs.score){
      allowedToAdd=false
    }
    if(innitialScore-1===probs.score){
      allowedTomin=false
    }
    !allowedTomin&&e===-1&&e++
    !allowedToAdd&&e===1&&e--
    dataCTX.setNewScore(probs.comment,probs.score+e)
  }
  return (
    <div className={classes.score}>
        <div className={classes.container}>

      <img onClick={calcHandler.bind(null,1)} src={btnAdd} alt="button plus" />
      <span>{probs.score}</span>
      <img onClick={calcHandler.bind(null,-1)} src={btnMinus} alt="button minus" />
        </div>
    </div>
  );
};
export default CommentScore;
