import check from '../assets/checkmark.svg';
import PropTypes from 'prop-types';
import '../styles/Checkmark.css';

const Checkmark = ({ done }) => {
  return (
    <div>
      {/* Cambiamos la logica dentro de Checkmark */}
      { done ?
          <img className="image-size" src={check} alt="Checkmark" />
          : <div style={{width: '36px'}}></div>
      }
    </div>
  )
}

Checkmark.propTypes = {
  done: PropTypes.bool
}

export default Checkmark;