import classes from "./Comment.module.css";
import CommentProfile from "./CommentProfile";
import React, { useContext ,useState} from "react";
import DataContext from "../../contexts/data-context";
import CommentScore from "./CommentScore";
import CommentReply from "./CommentReply";
import CommentContent from "./CommentContent";
import Replies from "../replies/Replies";
import ReplyBox from "../UI/ReplyBox";
const Comment = (probs) => {
    const [replyIsShown,setReplyIsShown]=useState(false) 
  const dataCTX = useContext(DataContext);
  const isUserComment =probs.comment.user.username === dataCTX.currentUser.username;
  const content = probs.comment.content;
    const onReplyHandler = (comment)=>{
        console.log(comment)
        setReplyIsShown(prw=>{
            return !prw
        })
    }
  return (
    <React.Fragment>
      <div className={classes["comment"]}>
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
        <CommentScore score={probs.comment.score} />

        <CommentReply isUser={isUserComment} onReply={onReplyHandler.bind(null,probs.comment)} />
      </div>
      {replyIsShown&&<ReplyBox type='REPLY'  currentUser={dataCTX.currentUser} ></ReplyBox>}
      <Replies replies={probs.comment.replies} id={probs.comment.id}></Replies>
    </React.Fragment>
  );
};
export default Comment;
