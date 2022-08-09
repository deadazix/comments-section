import React from "react"

const DataContext = React.createContext({
    comments:'',
    currentUser:{},
    
    addComment:(toWHoId)=>{},
    deleteComment:(commentId)=>{},
   

}) 
export default DataContext