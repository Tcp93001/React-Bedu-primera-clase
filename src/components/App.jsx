import Header from './Header';
import Form from './Form';
import TodoList from './TodoList'
import Todo from './Todo'
import '../styles/App.css';

const App = () => {
  return (
    <div className="wrapper">
      <div className="card-frame">
        <Header cant='15'/>
        <Form />
        <Todo />
        <TodoList />
      </div>
    </div>
  )
}

export default App
