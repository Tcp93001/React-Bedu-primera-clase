import { Component } from 'react';
import Checkmark from './Checkmark';
import PropTypes from 'prop-types';
import '../styles/Todo.css'

class Todo extends Component {
  // state = {
  //   done: false
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     done: true
  //   }
  // }

  // elementoTodo = () => {
  //   return (
  //     <>
  //       <p className="list-item">Tarea por hacer</p>
  //       <button className="delete">Borrar</button>
  //     </>
  //   )
  // }

  render() {
    return (
      <div className={`todo-container ${this.props.done ? 'dim-completed' : ''}`}>
        <Checkmark done={this.props.done} />
        <p onClick={e => this.props.toggleFn(e)} className="list-item">{this.props.title}</p>
        <button
          className="delete"
          onClick={e => this.props.deleteFn(e)}
        >
          Borrar
        </button>
      </div>
    )
  }
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired,
  deleteFn: PropTypes.func.isRequired
}

export default Todo;