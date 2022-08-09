import React,{ useContext,useState } from 'react'
import classes from './CommentsSection.module.css'
import Comment from '../components/commet/Comment'

import ReplyBox from '../components/UI/ReplyBox'
import DataContext from '../contexts/data-context'
import Modal from '../components/UI/Modal'
const CommentsSection = probs=>{
    const DataCTX = useContext(DataContext)
    
  
   
    // console.log(probs.data)
    return (
        <div className={classes.section}>
            {DataCTX.comments.map((comment,index)=>{
                
                return <Comment isReply={false} key={comment.id} comment={DataCTX.comments[index]} id={comment.id}/>
            })}

        <ReplyBox type='SEND'  currentUser={DataCTX.currentUser} ></ReplyBox>
        </div>
    )
}

export default CommentsSection