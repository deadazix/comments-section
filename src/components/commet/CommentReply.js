import classes from "./CommentReply.module.css";
import replyIcon from "./../../assets/images/icon-reply.svg";
const CommentReply = (probs) => {

  if(!probs.isUser) return (
    <div className={classes.reply}>
      <div>
        <img src={replyIcon} alt='reply Icon'/>
      </div>
      <div>reply</div>
    </div>
  );
  else if (probs.isUser){
    return <h1>delete</h1>
  }
};
export default CommentReply;
