import { context, ACTION } from "../App";
import { useContext } from "react";

function TodoItem(props) {
  const dispatch = useContext(context);
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onChange={(event) =>
            dispatch({
              type: ACTION.TOGGLE_COMPLETE,
              payload: { id: props.id },
            })
          }
        />
        <label>{props.title}</label>
        <button
          onClick={(event) =>
            dispatch({
              type: ACTION.REMOVE_TASK,
              payload: { id: props.id },
            })
          }
          className="destroy"
        />
      </div>
    </li>
  );
}

export default TodoItem;
