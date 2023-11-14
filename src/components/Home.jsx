import PropTypes from 'prop-types';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

const Home = (props) => {
  return (
    <>
      <Header
        counter={props.filtered.length}
        show={props.show}
        toggleDone={props.setShow}
      />

      <TodoList
        tasks={props.filtered}
        toggleFn={props.handleClickToggleDone}
        deleteFn={props.handleClickDelete}
      />

      <Form addTaskFn={props.handleAddTask} />
    </>
  )
}

Home.propTypes = {
  filtered: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  handleClickToggleDone: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired
}

export default Home;