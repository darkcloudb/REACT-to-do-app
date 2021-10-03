import TodoList from "../components/TodoList";

export const ACTIONS = {
  NEW_TASK: "NEW_TASK",
  INPUT_TEXT: "INPUT_TEXT",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  DELETE_TODO: "DELETE_TODO",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
};

function newTodo(inputValue, todosList) {
  return { id: todosList.length + 1, title: inputValue, completed: false };
}
// fixed a bug where new inputs could not be toggled true/false on React Dev Tools

// function toggleTest(event, todoId, todosList) {
//   return {
//     // id: todoId.todosList.id,
//     // title: todosList.title,
//     completed: !todosList.completed,
//   };
// }

export function reducer(task, action) {
  switch (action.type) {
    case ACTIONS.NEW_TASK:
      return {
        ...task,
        todosList: [
          ...task.todosList,
          newTodo(action.payload.title, task.todosList),
        ],
      };
    case ACTIONS.INPUT_TEXT:
      return { ...task, input: action.payload.title };
    // case ACTIONS.TOGGLE_COMPLETE:
    //   return {
    //     ...task,
    //     todosList: [
    //       ...task.todosList,
    //       toggleTest(action.payload.completed, task.todoList),
    //     ],
    //  };
    case ACTIONS.TOGGLE_COMPLETE:
      return task.todosList.map((task) => {
        // ^ return an object not an array
        if (task.id === action.payload.id) {
          return { ...task, complete: !task.complete };
        }
        return task;
      });
    default:
      return task;
  }
}
