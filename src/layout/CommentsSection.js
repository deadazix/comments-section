import React,{ useContext } from 'react'
import classes from './CommentsSection.module.css'
import Comment from '../components/commet/Comment'

import DataContext from '../contexts/data-context'
const CommentsSection = probs=>{
    const DataCTX = useContext(DataContext)
   
    // console.log(probs.data)
    return (
        <div className={classes.section}>
            {DataCTX.comments.map((comment,index)=>{
                
                return <Comment isReply={false} key={comment.id} comment={DataCTX.comments[index]} id={comment.id}/>
            })}
        
        </div>
    )
}

export default CommentsSection