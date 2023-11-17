import Checkmark from './Checkmark';
import PropTypes from 'prop-types';
import '../styles/Todo.css';
import { Grid, Typography, Button } from '@mui/material'


const Todo = ({
  done,
  title,
  toggleFn,
  deleteFn
}) => {

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
    </Grid>
  )
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired,
  deleteFn: PropTypes.func.isRequired
}

export default Todo;