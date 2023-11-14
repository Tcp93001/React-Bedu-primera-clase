import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Esta página no existe!</h1>
      <Link to="/" style={{color: 'red'}} >
        Regresar al menu principal
      </Link>
    </div>
  )
}

export default NotFound;