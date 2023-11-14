import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const TodoDetails = (props) => {
  const [todo, setTodo] = useState({ title: "", details: []})
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${props.url}/${id}`);
        const t = await response.json()

        setTodo(t)
      } catch(err) {
        console.error(err)
      }
    }

    getData()
  }, [id, props.url])

  return (
    <>
      <div>
        <h1>
          {todo.title}
        </h1>
      </div>
      <div>
        {
          todo.details.map((detail, index) =>
          <div key={index}>
            {detail}
          </div>)
        }
      </div>
    </>
  )
}

TodoDetails.propTypes = {
  url: PropTypes.string.isRequired
}

export default TodoDetails;