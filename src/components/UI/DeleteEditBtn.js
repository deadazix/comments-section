import classes from './DeleteEditBtn.module.css'
import DeleteIcon from '../../assets/images/icon-delete.svg'
import EditIcon from '../../assets/images/icon-edit.svg'
const DeleteEditBtn= probs=>{
    return <div className={classes.container}>
        <p className={classes.delete} > <img src={DeleteIcon} alt={'deleteIcon'}/> Delete</p>
        <p className={classes.edit} > <img src={EditIcon} alt={'deleteIcon'}/> Edit</p>

    </div>
}
export default DeleteEditBtn