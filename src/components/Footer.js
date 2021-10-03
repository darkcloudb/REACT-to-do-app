import { Link } from "react-router-dom";
import { ACTION, context } from "../App";
import { useContext } from "react";

function Footer(props) {
  const dispatch = useContext(context);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todoCount}</strong> item(s) left
      </span>
      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <button
        onClick={(event) =>
          dispatch({
            type: ACTION.CLEAR_DONE,
            payload: { id: props.id },
          })
        }
        className="clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
