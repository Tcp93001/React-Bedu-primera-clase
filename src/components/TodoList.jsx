import Todo from './Todo';

const TodoList = () => {
  return (
    <div style={{padding: '5px 0'}}>
      <h1>Todo List</h1>
      <Todo />
      <Todo done />
      <Todo />
      <Todo done />
      <Todo done />
      <Todo done />
    </div>
  )
};

export default TodoList;