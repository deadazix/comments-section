import classes from './DeleteEditBtn.module.css'
import DeleteIcon from '../../assets/images/icon-delete.svg'
import EditIcon from '../../assets/images/icon-edit.svg'
import React,{useContext} from 'react'
import DataContext from '../../contexts/data-context'
import Modal from './Modal'
const DeleteEditBtn= probs=>{
    const dataCTX = useContext(DataContext)
    const deleteHandler=e=>{
        probs.onModal(true)
        
    }
    return <div className={classes.container}>
        <p onClick={deleteHandler} className={classes.delete} > <img src={DeleteIcon} alt={'deleteIcon'}/> Delete</p>
        <p className={classes.edit} > <img src={EditIcon} alt={'deleteIcon'}/> Edit</p>
        
    </div>
}
export default DeleteEditBtn