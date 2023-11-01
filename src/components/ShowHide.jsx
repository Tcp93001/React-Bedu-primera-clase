import PropTypes from 'prop-types';
import '../styles/ShowHide.css'

const ShowHide = ({ toggleDone, show }) => {
  return (
    <div className="wrapper-tareas" onClick={e => toggleDone(!show)}>
      {!show ?
        <p className="tareas-completadas">Todas las tareas</p> :
        <p className="tareas-completadas">Solo tareas pendientes</p>
      }
    </div>
  )
}

ShowHide.propTypes = {
  toggleDone: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default ShowHide;