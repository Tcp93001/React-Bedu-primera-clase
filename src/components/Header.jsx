import PropTypes from 'prop-types';
import '../styles/header.css'

const Header = ({ counter = 0 }) => {

  return (
    <div>
      <h1 className="card-header-title header">
        Hay {counter} tareas
      </h1>
    </div>
  )
};

Header.propTypes = {
  counter: PropTypes.number
}

// Header.defaultProps = {
//   counter: 5
// }

export default Header;