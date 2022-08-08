import DataContext from "./data-context";
import myData from '../assets/data/data.json'
const ContextProvider = (probs) => {
    const {comments,currentUser}= myData
    
    const value = {
        comments:comments,
        currentUser:currentUser,
        addComment:(toWHoId)=>{},
        deleteComment:(commentId)=>{}
    }
  return (
  <DataContext.Provider value={value}>
    
    {probs.children}
  </DataContext.Provider>)
};
export default ContextProvider;
