import './index.css';
import TodoItem from '../TodoItem/index.js'
import {useState} from 'react'

/**
 * Responsible for managing the list of tasks and 
 * handling task-related functionality
 * 
 * Add task
 * Delete task
 * Edit task
 * 
 */
function TodoList() {

  const  [tasks, setTasks] = useState([
    {
      id:1,
      title:"assign. 1",
      desc:"this is an assignment that needs to be done",
      dueDate:"9/30/2010 12:00:00 AM"
    },
    {
      id:2,
      title:"assign. 2",
      desc:"computer systems assignment",
    },
    {
      id:3,
      title:"assign. 3",
      desc:"this is a tough one. Good luck sport",
      dueDate:"9/30/2010 12:00:00 AM"
    }
  ])

  function addTask(){
    

  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return(
    <>
      <button className='addButton'>Add</button>
      <ul>
        {tasks.map(task =>
          <TodoItem key={task.id} task={task} deleteTask={deleteTask}></TodoItem>
        )}
      </ul>
    </> 
  )
}

export default TodoList;