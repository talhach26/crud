import React,{useContext} from 'react'
import {TaskListContext} from '../context/TasklistContext'

function Task({task}) {
  const [tasks,addTask,removeTask,clearList,findItem]=useContext(TaskListContext)
  return (
    <div>
      <li className='list-item'>
      <span>{task.title}</span>
      <div>
        <button onClick={()=>{removeTask(task.id)}} className='btn-delete task-btn'><i className='fas fa-trash-alt'></i></button>
        <button onClick={()=>findItem(task.id)} className='btn-edit task-btn'><i className='fas fa-pen '></i></button>
      </div>
      </li>
    </div>
  )
}

export default Task
