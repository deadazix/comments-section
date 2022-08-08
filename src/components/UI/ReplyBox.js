import React, { useState } from "react";
import classes from "./ReplyBox.module.css";
const ReplyBox = (probs) => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const onChangeHandler = (e) => {
    setTextAreaValue(e.target.value);
  };
  const imageName = probs.currentUser.image.png.slice(
    probs.currentUser.image.png.lastIndexOf("/") + 1
  );
  const img = require(`../../assets/images/avatars/${imageName}`);
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
      >
        {" "}
      </textarea>
      <button>{probs.type}</button>
    </div>
  );
};
export default ReplyBox;
