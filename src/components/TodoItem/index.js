import './index.css';

/**
 * contain the task and the buttons that operate on it
 */

function TodoItem({task, deleteTask}) {

  return(
    <li>
      <div className="taskContents">
        <div>
          <div className="title">
            {task.title}
          </div>
          <div className='desc'>
            {task.desc}
          </div>
        </div>
        <div className='deleteButtonContainer'>
          <button className='deleteButton' onClick={() => deleteTask(task.id)}>
            X
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem;