import React,{useContext,useState,useEffect} from 'react'
import {TaskListContext} from '../context/TasklistContext'

const TaskForm=()=> {
  const[tasks,addTask,removeTask,clearList,findItem,editTask,editItem] =useContext(TaskListContext)

  const [title,setTitle]=useState('')

  const handleSubmit=e=>{
    e.preventDefault()
    if(!editItem)
    {
      addTask(title)
      setTitle("")

    }else{
      editTask(title,editItem.id)
    }
    

  }
  const handleChange=e=>{
    setTitle(e.target.value)
   

  }

  useEffect(()=>{
    if(editItem){
      setTitle(editItem.title)
      console.log(editItem)

    }
    else
    {
      setTitle('')
    }

  },[editItem])

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type='text' className='task-input' placeholder='Add Task...' required
      value={title}
        onChange={handleChange} />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>{editItem ? 'Edit Task':'Add Task'}</button>
        <button onClick={clearList} className='btn clear-btn'>Clear</button>
      </div>
    </form>
  )
}

export default TaskForm
