import { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList'
import '../styles/App.css';

const App = () => {

  const [todos, setTodos] = useState([])
  const [show, setShow] = useState(true)

  // Iniciando, setear en un useEffect mount el valor de todos
  // useEffect(() => {
  //   setTodos([
  //     { title: "Tarea 1000000000", done: true },
  //     { title: "Tarea 2", done: false },
  //     { title: "Tarea 3", done: true },
  //     { title: "Tarea 4", done: false },
  //     { title: "Tarea 5", done: true },
  //     { title: "Tarea 6", done: false },
  //     { title: "Tarea 7", done: true },
  //     { title: "Tarea 8", done: false },
  //     { title: "Tarea 9", done: true },
  //     { title: "Tarea 10", done: false },
  //   ])
  // }, [])

  // Usar este useEffect cuando llame al servidor
  // No usamos https, solo la version insegura
  const URL = 'http://localhost:3000/todos'
  useEffect(() => {
    const getData = async () => {
      // si quiero agregar control de errores, agrego un bloque try/catch
      try{
        const response = await fetch(URL)
        const data = await response.json()
        setTodos(data)
      } catch(err) {
        console.log(err)
      }
      // const response = await fetch(URL)
      // const data = await response.json()
      // setTodos(data)
    };

    getData();
  }, [])


  const handleClickDelete = (event, title) => {
    const todosList = [...todos]
    const index = todosList.findIndex(elem => elem.title === title)
    if (index > -1) todosList.splice(index, 1)
    setTodos(todosList)
  }

  const changeProperty = (config, property, value) => {
    return fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ [property]: value })
    })
  }

  const goToBackend = (config, data) => {
    return fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  const handleClickToggleDone = async (event, title) => {
    const task = todos.find(elem => elem.title === title);
    if (task === undefined) return;

    const value = !task.done;
    const config = {
      url: `${URL}/${task.id}`,
      method: 'PATCH'
    };

    try {
      const response = await changeProperty(config, "done", value)

      if (!response.ok) throw new Error("Response not ok");

      // UI
      const t = [...todos];
      const index = t.findIndex(element => element.id === task.id);
      t[index].done = !t[index].done;

      setTodos(t);
    } catch(err) {
      console.error(err)
    }

    // const todosList = [...todos]
    // const index = todosList.findIndex(elem => elem.title === title)
    // if (index > -1) todosList[index].done = !todosList[index].done
    // setTodos(todosList)
  }

  const handleAddTask = async (title) => {
    const itExists = todos.find(elem => elem.title === title)
    if (itExists) {
      alert('Esta tarea ya existe')
      return
    }

    
    // // Cambio en el servidor
    const config = {
      url: URL,
      method: "POST"
    };

    const data = {
      title: title,
      done: false,
    };

    try {
      const response = await goToBackend(config, data);
      if (!response.ok) throw new Error("Response not ok");

      const todo = await response.json();

      // UI
      setTodos(todos.concat([todo]));
    } catch (error) {
      console.error(error);
    }

    // const todosList = [...todos]
    // setTodos(todosList.concat([{ title, done: false }]))


  }

  const filterTodos = todos.filter(elem => !elem.done || elem.done === show)

  return (
    <div className="wrapper">
      <div className="card-frame">
        <Header
          counter={todos.length}
          show={show}
          toggleDone={setShow}
        />
        <TodoList
          tasks={filterTodos}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form addTaskFn={handleAddTask} />

      </div>
    </div>
  )
}

export default App;
