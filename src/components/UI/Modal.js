import classes from "./Modal.module.css";
import React,{useContext} from "react";
import ReactDOM from "react-dom";
import DataContext from "../../contexts/data-context";
const Modal = (probs) => {
   const dataCTX = useContext(DataContext)
    
  const ModalBackface = (probs) => {
    return <div onClick={probs.onClose} className={classes.background}></div>;
  };
  const Content = (probs) => {
    const deleteCommentHandler= e=>{
        console.log(probs.comment)
        dataCTX.deleteComment(probs.comment)
    }
    return (
      <div className={classes.content}>
        <h3>DELETE COMMENT</h3>
        <p>
          are you sure you want to delete this comment? this will remove your
          comment and cant be undone
        </p>
        <div className={classes.container}>
          <button onClick={probs.onClose} className={classes.cancel}>
            NO, CANCEL
          </button>
          <button onClick={deleteCommentHandler}>YES, DELETE</button>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackface onClose={probs.onClose}></ModalBackface>,
        document.getElementById("modal")
      )}

      {ReactDOM.createPortal(
        <Content comment={probs.comment} onClose={probs.onClose}></Content>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};
export default Modal;
