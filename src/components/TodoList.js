import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
            toggleComplete={props.toggleComplete}
            deleteTodo={props.deleteTodo}
            dispatch={props.dispatch}
            // clearCompleted={props.clearCompleted}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
