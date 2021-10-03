import "./App.css";
import React from "react";
import { useEffect, useReducer } from "react";
import todosList from "./todos.json";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

import TodoList from "./components/TodoList";

export const context = React.createContext(null);

const inititalState = {
  todosList,
  input: "",
};

export const ACTION = {
  NEW_TASK: "NEW_TASK",
  INPUT_TASK: "INPUT_TEXT",
  TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
  REMOVE_TASK: "REMOVE_TASK",
  CLEAR_DONE: "CLEAR_DONE",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.NEW_TASK:
      return {
        ...state,
        todosList: [...state.todosList, newTodo(action.payload.title)],
      };
    case ACTION.INPUT_TASK:
      return { ...state, input: action.payload.title };
    case ACTION.TOGGLE_COMPLETE:
      return {
        ...state,
        todosList: state.todosList.map((todo) => {
          if (todo.id === action.payload.id) {
            let toggleTodo = {
              ...todo,
            };
            toggleTodo.completed = !toggleTodo.completed;
            return toggleTodo;
          }
          return todo;
        }),
      };
    case ACTION.REMOVE_TASK:
      return {
        ...state,
        todosList: state.todosList.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    case ACTION.CLEAR_DONE:
      return {
        ...state,
        todosList: state.todosList.filter((todo) => !todo.completed),
      };
    default:
      return state;
  }
}

function newTodo(inputValue) {
  return { id: Date.now(), title: inputValue, completed: false };
}

function App() {
  const [state, dispatch] = useReducer(reducer, inititalState);

  function handleKey(event) {
    if (event.key === "Enter") {
      dispatch({
        type: ACTION.NEW_TASK,
        payload: { title: state.input },
      });
      event.target.value = "";
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <context.Provider value={dispatch}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={(event) =>
              dispatch({
                type: ACTION.INPUT_TASK,
                payload: { title: event.target.value },
              })
            }
            autofocus
          />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <TodoList {...props} todos={state.todosList} />}
          />
          <Route path="/active">
            <TodoList
              todos={state.todosList.filter((todos) => !todos.completed)}
            />
          </Route>
          <Route path="/completed">
            <TodoList
              todos={state.todosList.filter((todos) => todos.completed)}
            />
          </Route>
        </Switch>
        <Footer
          dispatch={dispatch}
          todoCount={state.todosList.filter((todo) => !todo.completed).length}
        />
      </section>
    </context.Provider>
  );
}

export default App;
