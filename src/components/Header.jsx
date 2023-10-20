import '../styles/header.css'

const Header = ({ cant }) => {

  return (
    <div>
      <h1 className="card-header-title header">
        {`Hay ${cant} tareas`}
      </h1>
    </div>
  )
};

export default Header;