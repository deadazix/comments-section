import classes from "./CommentReply.module.css";
import replyIcon from "./../../assets/images/icon-reply.svg";
import DeleteEditBtn from "../UI/DeleteEditBtn";
const CommentReply = (probs) => {

  if(!probs.isUser) return (
    <div onClick={probs.onReply} className={classes.reply}>
      <div>
        <img src={replyIcon} alt='reply Icon'/>
      </div>
      <div>reply</div>
    </div>
  );
  else if (probs.isUser){
    return <DeleteEditBtn onModal={probs.onModal} comment={probs.comment}/>
  }
};
export default CommentReply;
