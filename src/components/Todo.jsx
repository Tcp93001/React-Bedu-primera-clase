import { Component } from 'react';
import Checkmark from './Checkmark';
import PropTypes from 'prop-types';
import '../styles/Todo.css'

class Todo extends Component {
  state = {
    done: false
  }

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
        {/* {this.elementoTodo()}
         */}
        {
          this.props.done ? <Checkmark /> : <div style={{width: '36px'}}></div>
        }

        <p className="list-item">Tarea por hacer</p>
        <button className="delete">Borrar</button>
      </div>
    )
  }
}

Todo.propTypes = {
  done: PropTypes.bool
}

export default Todo;