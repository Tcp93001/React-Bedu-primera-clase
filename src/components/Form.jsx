import { useState } from "react";
import PropTypes from 'prop-types';
import '../styles/Form.css'

const Form = ({ addTaskFn }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTaskFn(value)
    setValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form-style"
    >
      <input
        placeholder="Capture la tarea a ejecutar"
        type="text"
        className="add-task"
        value={value}
        onChange={handleChange}
      />
      <button>Agregar Tarea</button>
    </form>
  )
}

Form.propTypes ={
  addTaskFn: PropTypes.func.isRequired
}

export default Form;