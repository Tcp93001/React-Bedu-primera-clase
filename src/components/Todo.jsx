import Checkmark from './Checkmark';
import PropTypes from 'prop-types';
import '../styles/Todo.css'

const Todo = ({
  done,
  title,
  toggleFn,
  deleteFn
}) => {

  return (
    <div className={`todo-container ${done ? 'dim-completed' : ''}`}>
      <Checkmark done={done} />
      <p onClick={e => toggleFn(e)} className="list-item">{title}</p>
      <button
        className="delete"
        onClick={e => deleteFn(e)}
      >
        Borrar
      </button>
    </div>
  )
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired,
  deleteFn: PropTypes.func.isRequired
}

export default Todo;