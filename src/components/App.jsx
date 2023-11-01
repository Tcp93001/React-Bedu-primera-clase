import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList'
import '../styles/App.css';

const App = () => {
  // state = {
  //   todos: []
  // }

  const [todos, setTodos] = useState([
    { title: "Tarea 1000000000", done: true },
    { title: "Tarea 2", done: false },
    { title: "Tarea 3", done: true },
    { title: "Tarea 4", done: false },
    { title: "Tarea 5", done: true },
    { title: "Tarea 6", done: false },
    { title: "Tarea 7", done: true },
    { title: "Tarea 8", done: false },
    { title: "Tarea 9", done: true },
    { title: "Tarea 10", done: false },
  ])

  // componentDidMount() {
  //   this.setState({
  //     todos: [
  //       { title: "Tarea 1000000000", done: true },
  //       { title: "Tarea 2", done: false },
  //       { title: "Tarea 3", done: true },
  //       { title: "Tarea 4", done: false },
  //       { title: "Tarea 5", done: true },
  //       { title: "Tarea 6", done: false },
  //       { title: "Tarea 7", done: true },
  //       { title: "Tarea 8", done: false },
  //       { title: "Tarea 9", done: true },
  //       { title: "Tarea 10", done: false },
  //     ],
  //   })
  // }

  const handleClickDelete = (event, index) => {
    const todosList = [...todos]
    todosList.splice(index, 1)
    setTodos(todosList)
  }

  const handleClickToggleDone = (event, index) => {
    const todosList = [...todos]
    todosList[index].done = !todosList[index].done
    setTodos(todosList)
  }

  // const handleClickReset = (e) => {
  //   this.setState({
  //     todos: [...todosOriginales]
  //   })
  // }

  const handleAddTask = (title) => {
    const itExists = todos.find(elem => elem.title === title)

    if (itExists) {
      alert('Esta tarea ya existe')
      return
    }

    const todosList = [...todos]

    setTodos(todosList.concat([{ title, done: false }]))
  }

  return (
    <div className="wrapper">
      <div className="card-frame">
        <Header counter={todos.length} />
        <TodoList
          tasks={todos}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form addTaskFn={handleAddTask} />

      </div>
    </div>
  )
}

export default App;
