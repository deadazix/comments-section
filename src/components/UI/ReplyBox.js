import React, { useState, useContext } from "react";
import DataContext from "../../contexts/data-context";
import classes from "./ReplyBox.module.css";
const ReplyBox = (probs) => {
  const dataCTX = useContext(DataContext);
  const [textAreaValue, setTextAreaValue] = useState(probs.value);
  const imageName = probs.currentUser.image.png.slice(
    probs.currentUser.image.png.lastIndexOf("/") + 1
  );
  const img = require(`../../assets/images/avatars/${imageName}`);

  const onChangeHandler = (e) => {
    setTextAreaValue(e.target.value);
  };
  const onClickHandler = (onClickEvent) => {
   
    let newComment;
    if (probs.type === "REPLY") {
     
      newComment = {
        id: dataCTX.lastId + 1,
        content: textAreaValue.replace(probs.value, ""),
        createdAt: "now",
        score: 0,
        replyingTo: probs.value.slice(1),
        user: dataCTX.currentUser,
        type: "REPLY",
        insideId: probs.reciverComment.insideId,
      };
      dataCTX.setLastId((prw) => {
        return prw + 1;
      });
    } else if (probs.type === "SEND") {
      console.log("send in box");
      newComment = {
        id: dataCTX.lastId + 1,
        content: textAreaValue,
        createdAt: "now",
        score: 0,
        replies: [],
        user: dataCTX.currentUser,
        type: "SEND",
        insideId:dataCTX.lastId + 1,
      };
      dataCTX.setLastId((prw) => {
        return prw + 1;
      });
    }

    dataCTX.addComment(newComment);
    probs.type==='REPLY'&& probs.onClose()
    setTextAreaValue('')
  };
  return (
    <div className={classes.container}>
      <img src={img} alt={"profile"} />
      <textarea
        value={textAreaValue}
        onChange={onChangeHandler}
        name="text"
        rows="14"
        cols="10"
        wrap="soft"
        placeholder="pls enter more 10 char"
      ></textarea>
      <button onClick={onClickHandler}>{probs.type}</button>
    </div>
  );
};
export default ReplyBox;
