import ShowHide from './ShowHide';
import PropTypes from 'prop-types';
import '../styles/header.css'

const Header = ({ counter = 0, show, toggleDone }) => {

  return (
    <div>
      <h1 className="card-header-title header">
        Hay {counter} tareas
      </h1>
      <ShowHide show={show} toggleDone={toggleDone}></ShowHide>
    </div>
  )
};

Header.propTypes = {
  counter: PropTypes.number,
  show: PropTypes.bool.isRequired,
  toggleDone: PropTypes.func.isRequired
}

export default Header;