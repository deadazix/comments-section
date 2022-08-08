import classes from './CommentProfile.module.css'

const CommentProfile = (probs) => {
    let img;
    try{
        const imageName = probs.png.slice(probs.webp.lastIndexOf('/')+1)
        img = require(`../../assets/images/avatars/${imageName}`)
    }catch(err){
        const imageName = probs.png.slice(probs.webp.lastIndexOf('/')+1)
        img = require(`../../assets/images/avatars/${imageName}`)
    }


    
   
  return (
    <div className={classes.profile}>
      <img className={classes.profile__img} src={img} alt='profile' />
      <div className={classes.profile__username}>{probs.username}</div>
      <div className={classes.profile__time} >{probs.time}</div>
    </div>
  );
};
export default CommentProfile;
