import classes from "./Comment.module.css";
import CommentProfile from "./CommentProfile";
import React, { useContext, useState } from "react";
import DataContext from "../../contexts/data-context";
import CommentScore from "./CommentScore";
import CommentReply from "./CommentReply";
import CommentContent from "./CommentContent";
import Replies from "../replies/Replies";
import ReplyBox from "../UI/ReplyBox";
import Modal from "../UI/Modal";
const Comment = (probs) => {
  const [modalIsShown,setModalIsShown]= useState(false)
  const [textAreaValue, setTextAreaValue] = useState("");
  const [replyIsShown, setReplyIsShown] = useState(false);
  const dataCTX = useContext(DataContext);
  const isUserComment =
    probs.comment.user.username === dataCTX.currentUser.username;
  const content = probs.comment.content;
  const onReplyHandler = (comment) => {
  
    setTextAreaValue("@" + comment.user.username + " ");
    setReplyIsShown((prw) => {
      return !prw;
    });
  };
  const onCloseHandler=e=>{
    setReplyIsShown(false)
  }
  const onCloseModalHandler = e=>{
    setModalIsShown(false)
  }
  return (
    <React.Fragment>
      <div className={`${classes.comment} ${isUserComment&& classes.self}`}>
        <CommentProfile
          username={probs.comment.user.username}
          png={probs.comment.user.image.png}
          webp={probs.comment.user.image.webp}
          isUser={isUserComment}
          time={probs.comment.createdAt}
        />
        <CommentContent
          replyingTo={probs.comment.replyingTo}
          isReply={probs.isReply}
          content={content}
          comment={probs.comment}
        />
        <CommentScore comment={probs.comment} score={probs.comment.score} />

        <CommentReply
          isUser={isUserComment}
          onReply={onReplyHandler.bind(null, probs.comment)}
          comment = {probs.comment}
          onModal={setModalIsShown}
        />
      </div>
      {replyIsShown && (
        <ReplyBox
          type="REPLY"
          value={textAreaValue}
          reciverComment={probs.comment}
          currentUser={dataCTX.currentUser}
          onClose={onCloseHandler}
        ></ReplyBox>
      )}
      <Replies replies={probs.comment.replies} id={probs.comment.id}></Replies>
      {modalIsShown&&<Modal  comment = {probs.comment} onClose={onCloseModalHandler}></Modal>}

    </React.Fragment>
  );
};
export default Comment;
