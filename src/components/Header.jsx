import ShowHide from './ShowHide';
import PropTypes from 'prop-types';
import '../styles/header.css';
import Typography from '@mui/material/Typography';

const Header = ({ counter = 0, show, toggleDone }) => {

  return (
    <div>
      <Typography
        variant='h1'
        className='header'
        sx={{
          fontSize: '3.2em',
          fontWeight: 'bold'
        }}
      >
        Hay {counter} tareas
      </Typography>

      <ShowHide show={show} toggleDone={toggleDone} />
    </div>
  )
};

Header.propTypes = {
  counter: PropTypes.number,
  show: PropTypes.bool.isRequired,
  toggleDone: PropTypes.func.isRequired
}

export default Header;