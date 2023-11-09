import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ tasks, toggleFn, deleteFn }) => {
  return (
    <div style={{padding: '5px 0'}}>
      <h1>Todo List</h1>
      {
        tasks.map((elem, index) =>
          <Todo
            key={index}
            done={elem.done}
            title={elem.title}
            deleteFn={(e) => deleteFn(e, elem.title)}
            toggleFn={(e) => toggleFn(e, elem.title)}
          />
        )

      }
    </div>
  )
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  toggleFn: PropTypes.func.isRequired,
  deleteFn: PropTypes.func.isRequired
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;