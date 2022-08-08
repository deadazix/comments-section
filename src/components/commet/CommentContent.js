import classes from "./CommentContent.module.css";
const CommentContent = (probs) => {


  return (
    <div className={classes.content}>
      
      <div>
      {probs.isReply && <div className={classes.replyingto}>{`@${probs.comment.replyingTo}`}</div>}
      {` ${probs.content}`}
      </div>
    </div>
  );
};
export default CommentContent;
