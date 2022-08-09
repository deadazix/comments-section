import React, { useState, useReducer } from "react";
import DataContext from "./data-context";
import myData from "../assets/data/data.json";

const reducerFunction = (state, action) => {
  if (action.type === "REPLY") {
    // if(action.comment.content?.trim().length<10||!action.comment.content){
     
    //   return {
    //     comments: state.comments,
    //     currentUser: myData.currentUser,
    //   }
    // }
    const index = state.comments.findIndex((comment) => {
      return comment.id === action.comment.insideId;
    });

    state.comments[index].replies = [
      ...state.comments[index].replies,
      action.comment,
    ];
    return {
      comments: state.comments,
      currentUser: myData.currentUser,
    };
  }
  if(action.type==='SEND'){
    if(action.comment.content?.trim().length<10||!action.comment.content){
     
      return {
        comments: state.comments,
        currentUser: myData.currentUser,
      }
    }
   
    return {
      comments: state.comments.concat(action.comment),
      currentUser: myData.currentUser,
    };

  }
  if(action.type==='DELETE'){
   
    const commentId = action.comment.id
    const index = state.comments.findIndex((comment) => {
      return comment.id === action.comment.insideId;
    });

    if(commentId===state.comments[index].id){
      state.comments.pop(index)
      return {
        comments: state.comments,
        currentUser: state.currentUser,
      }
    }else{
   
      const indexReply =  state.comments[index].replies.findIndex(reply=>{
      
        return reply.id===commentId
      })
      state.comments[index].replies.pop(indexReply)
      return {
        comments: state.comments,
        currentUser: state.currentUser,
      }
    }
    
    
  }
  if(action.type==='SCORE'){
    
    const commentId = action.comment.id
    const index = state.comments.findIndex((comment) => {
      return comment.id === action.comment.insideId;
    });
    if(commentId===state.comments[index].id){
     
      state.comments[index].score=action.newScore
    }else{
      const indexReply =  state.comments[index].replies.findIndex(reply=>{
      
        return reply.id===commentId
      })
      state.comments[index].replies[indexReply].score=action.newScore
    }
  }
  return {
    comments: state.comments,
    currentUser: state.currentUser,
  };
};

const ContextProvider = (probs) => {

  const [dataState, dispatchDataState] = useReducer(reducerFunction, {
    comments: myData.comments,
    currentUser: myData.currentUser,
  });
  const [lastId, setLastId] = useState(6);
  const addCommentHandler = (comment) => {
    dispatchDataState({ type: comment.type, comment: comment });
  };
  const deleteCommentHandler = comment=>{
    dispatchDataState({type:'DELETE',comment:comment})
  }
  const setNewScoreHandler = (comment,newScore)=>{

    dispatchDataState({type:'SCORE',comment:comment,newScore})
  }
  const value = {
    comments: dataState.comments,
    currentUser: dataState.currentUser,
    lastId: lastId,
    setLastId,
    addComment: addCommentHandler,
    deleteComment:deleteCommentHandler,
    setNewScore:setNewScoreHandler,
 
  };

  return (
    <DataContext.Provider value={value}>{probs.children}</DataContext.Provider>
  );
};
export default ContextProvider;
