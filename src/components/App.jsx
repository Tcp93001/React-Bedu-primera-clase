import Header from './Header';
import Form from './Form';
import TodoList from './TodoList'
import '../styles/App.css';

const App = () => {
  return (
    <div className="wrapper">
      <div className="card-frame">
        <Header cant='7'/>
        <TodoList />
        <Form />
      </div>
    </div>
  )
}

export default App
