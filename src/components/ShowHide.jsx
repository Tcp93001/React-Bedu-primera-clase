import PropTypes from 'prop-types';
import '../styles/ShowHide.css';
import { Button } from '@mui/material'

const ShowHide = ({ toggleDone, show }) => {
  return (
    <Button
      variant='outlined'
      size='medium'
      onClick={e => toggleDone(!show)}
      color='info'
    >
      {!show ?
        <p className="tareas-completadas">Todas las tareas</p> :
        <p className="tareas-completadas">Solo tareas pendientes</p>
      }
    </Button>
  )
}

ShowHide.propTypes = {
  toggleDone: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default ShowHide;