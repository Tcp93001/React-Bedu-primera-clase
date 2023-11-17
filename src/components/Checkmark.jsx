import check from '../assets/checkmark.svg';
import PropTypes from 'prop-types';
import '../styles/Checkmark.css';
import Icon from '@mui/material/Icon';

const Checkmark = ({ done }) => {
  return (
    <div>
      {/* Cambiamos la logica dentro de Checkmark */}
      { done ?
          <Icon color="success">done</Icon>
          : <div style={{width: '36px'}}></div>
      }
    </div>
  )
}

Checkmark.propTypes = {
  done: PropTypes.bool
}

export default Checkmark;