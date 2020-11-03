import React,{useState,createContext} from 'react'


export const TaskListContext =createContext()

export const TaskListProvider=props=>{
  
const [tasks,setTasks]=useState([
  {title:'Read the book',id:0},
  {title:'Wash the Car',id:1},
  {title:'Write some code',id:2}
])

const [editItem,setEditItem]=useState(null)

const addTask=(title)=>{
  setTasks([...tasks,{title,id:tasks.length+1}])
}
const removeTask=id=>{
  setTasks(tasks.filter(task=>task.id !== id))

}
const clearList=()=>{
  setTasks([])
}
const findItem=id=>{
  const item=tasks.find(task=>task.id===id)
  setEditItem(item)

}
const editTask=(title,id)=>{
  const newTasks=tasks.map(task=> (task.id===id?{title,id}:task) )
  setTasks(newTasks)
  setEditItem(null)
}

  return(
     <TaskListContext.Provider value={[tasks,addTask,removeTask,clearList,findItem,editTask,editItem]}>
       {props.children}
     </TaskListContext.Provider>
  )
}

