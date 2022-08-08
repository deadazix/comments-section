import React from "react";
import classes from "./Replies.module.css";
import Comment from "../commet/Comment";
const Replies = (probs) => {
    
  
  return (
    <div className={classes.replies}>
      {probs.replies?.map((comment,index) => {
       
        return <Comment isReply={true} comment={comment} key={index}/>
      })}
    </div>
  );
};
export default Replies;
