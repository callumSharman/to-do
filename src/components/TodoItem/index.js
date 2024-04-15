import './index.css';

function TodoItem({id, title, desc, dueDate}) {

  return(
    <li key={id}>
      <div className="taskContents">
        <div>
          <div className="title">
            {title}
          </div>
          <div className='desc'>
            {desc}
          </div>
        </div>
        <div className='date'>
          {dueDate}
        </div>
      </div>
    </li>
  )
}

export default TodoItem;