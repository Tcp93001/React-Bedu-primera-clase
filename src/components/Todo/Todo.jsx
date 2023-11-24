import Checkmark from '../Checkmark';
import PropTypes from 'prop-types';
import '../styles/Todo.css';
import { Grid, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Todo = ({
  done,
  title,
  toggleFn,
  deleteFn,
  id
}) => {

  const navigate = useNavigate();
  const irADetails = (id) => navigate(`/details/${id}`)

  return (
    <Grid container className={`todo-container ${done ? 'dim-completed' : ''}`}>
      <Checkmark done={done} />
      <Typography onClick={e => toggleFn(e)} sx={{margin: '0 15px'}}>{title}</Typography>
      <Button
        color="warning"
        variant='contained'
        onClick={e => deleteFn(e)}
      >
        Borrar
      </Button>
      <Button
        sx={{marginLeft: 1}}
        variant="contained"
        color="secondary"
        onClick={() => irADetails(id)}
      >
        Detalles
      </Button>
    </Grid>
  )
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired,
  deleteFn: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default Todo;