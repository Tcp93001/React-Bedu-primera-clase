import { useEffect, useState } from 'react';
import Home from './Home';
import NotFound from './NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import TodoDetails from './TodoDetails';

const App = () => {

  const [todos, setTodos] = useState([])
  const [show, setShow] = useState(true)

  // Usar este useEffect cuando llame al servidor
  // No usamos https, solo la version insegura
  const URL = 'http://localhost:3000/todos'

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await fetch(URL)
        const data = await response.json()
        setTodos(data)
      } catch(err) {
        console.log(err)
      }
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
  }

  const handleAddTask = async (title) => {
    const itExists = todos.find(elem => elem.title === title)
    if (itExists) {
      alert('Esta tarea ya existe')
      return
    }

    // Cambio en el servidor
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
  }

  const filterTodos = todos.filter(elem => !elem.done || elem.done === show)

  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="card-frame">
          <Routes>
            <Route path="/" exact element={
              <Home
                filtered={filterTodos}
                show={show}
                setShow={setShow}
                handleClickDelete={handleClickDelete}
                handleClickToggleDone={handleClickToggleDone}
                handleAddTask={handleAddTask}
              />
            } />
            <Route path="/details/:id" element={
              <TodoDetails
                url={URL}
              />
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
