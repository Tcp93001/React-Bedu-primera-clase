import { Component } from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList'
import '../styles/App.css';

class App extends Component {
  state = {
    todos: [],
    showButton: true
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      todos: [
        { title: "Tarea 1", done: true },
        { title: "Tarea 2", done: false },
        { title: "Tarea 3", done: true },
        { title: "Tarea 4", done: false },
        { title: "Tarea 5", done: true },
        { title: "Tarea 6", done: false },
        { title: "Tarea 7", done: true },
        { title: "Tarea 8", done: false },
        { title: "Tarea 9", done: true },
        { title: "Tarea 10", done: false },
      ],
      showButton: false
    })
  }


  render() {
    return (
      <div className="wrapper">
        <div className="card-frame">
          <Header counter={this.state.todos.length} />
          <TodoList tasks={this.state.todos} />
          <Form />
          {
            this.state.showButton ?
              <button onClick={this.handleClick}>
                Inicializar
              </button>
              : null
          }
        </div>
      </div>
    )
  }
}

export default App;
