import classes from "./CommentContent.module.css";
const CommentContent = (probs) => {
  console.log(probs.isReply);
  console.log(probs.comment.replyingTo);

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
