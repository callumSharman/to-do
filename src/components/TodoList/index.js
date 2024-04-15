import './index.css';

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
    {id: 1, title: "assignment 1", desc:"complete soon", dueDate:"9/30/2010 12:00:00 AM"},
    {id: 2, title: "assignment 2", desc:"computer systems assignment", dueDate:null},
    {id: 3, title: "assignment 3", desc:"this is a tough one", dueDate:"9/30/2010 12:00:00 AM"},
  ]

  // convert tasks to html
  const taskItems = tasks.map(task => {
    return(
      <li key={task.id}>
        <div className="taskContents">
          <div>
            <div className="title">
              {task.title}
            </div>
            <div className='desc'>
              {task.desc}
            </div>
          </div>

          <div className='date'>
            {task.dueDate}
          </div>
        </div>
      </li>
    )
  })

  return(
    <>
      <ul>
        {taskItems}
      </ul>
    </> 
  )
}

export default TodoList;