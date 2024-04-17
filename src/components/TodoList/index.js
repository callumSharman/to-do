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

  const [tasks, setTasks] = useState([
    {
      id:1,
      title:"assign. 1",
      desc:"this is an assignment that needs to be done"
    },
    {
      id:2,
      title:"assign. 2",
      desc:"computer systems assignment",
    },
    {
      id:3,
      title:"assign. 3",
      desc:"this is a tough one. Good luck sport"
    }
  ])

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  function addTask(){

    setTasks(tasks => [...tasks, {
      id:Date.now(),
      title:title,
      desc:desc,
    }])

    setTitle('');
    setDesc('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return(
    <>
      <label className='inputField' for="title">Title:</label>
      <input className='inputField' type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)}></input>

      <label className="inputField" for="desc">Description:</label>
      <textarea className='inputField' type="text" id="desc" name="desc" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
      <p></p>
      <button className='inputField' onClick={addTask}>Add</button>
      <ul>
        {tasks.map(task =>
          <TodoItem key={task.id} task={task} deleteTask={deleteTask}></TodoItem>
        )}
      </ul>
    </> 
  )
}

export default TodoList;