import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ tasks }) => {
  return (
    <div style={{padding: '5px 0'}}>
      <h1>Todo List</h1>
      {
        tasks.map((elem, index) =>
          <Todo
            key={index}
            done={elem.done}
            title={elem.title}
          />
        )

      }
    </div>
  )
};

TodoList.propTypes = {
  tasks: PropTypes.array
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;