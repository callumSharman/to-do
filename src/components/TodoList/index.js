import './index.css';
import TodoItem from '../TodoItem/index.js'

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
  let tasks = [
    <TodoItem id={1} title={"assign. 1"} desc={"this is an assignment that needs to be done"} dueDate={"9/30/2010 12:00:00 AM"}></TodoItem>,
    <TodoItem id={1} title={"assign. 2"} desc={"computer systems assignment"}></TodoItem>,
    <TodoItem id={1} title={"assign. 3"} desc={"this is a tough one. Good luck sport"} dueDate={"9/30/2010 12:00:00 AM"}></TodoItem>
  ]

  return(
    <>
      <ul>
        {tasks}
      </ul>
    </> 
  )
}

export default TodoList;