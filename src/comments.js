// {props.productList
//   .filter((product) => {
//     if (filter) { // filter = ""
//       return product.department === filter; department === ""
//     }
//     return true;
//   })
//   .map((product) => {
//     return (
//       <Link
//         key={product.id}
//         to={`/products/detail/${product.id}`}
//       >
//         <ProductSummary key={product.id} product={product} />
//       </Link>
//     );
//   })}

{
  /* <Route path="/active">
  {todos
    .filter((todos) => (todos.completed = false))
    .map((todos) => {
      return (
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      );
    })}
  </Route> */
}

// console.log("clicked");
// setTodos((todos) => {
//   return todos.map((todo) => {
//     if (todo.id == todoId) {
//       let toggleFeature = {
//         ...todo,
//       };
//       toggleFeature.completed = !toggleFeature.completed;
//       return toggleFeature;
//     }
//     return todo;
//   });
// });

// console.log("deleted");
// setTodos((todos) => {
//   return todos.filter((todo) => {
//     return todo.id != todoId;
//   });
// });

// setTodos((todos) => {
//   return todos.map((todo) => {
//     if ((todo.completed = false)) {
//       let isActive = {
//         ...todo,
//       };
//       return isActive;
//     }
//     return todo;
//   });
// });

//const complete = todos.map((todo) => (todo.completed = !todo.completed));
// works but its ALL or nothing
//const input = todos.map((todo) => (todo.completed = !todo.completed));
// toggle works? but chances things to undefined
//setInput(input);

// function addTask(event) {
//   if (event.key === "Enter") {
//     setTodos([
//       ...todos,
//       {
//         id: todos.length + 1,
//         title: input,
//         completed: false,
//       },
//     ]);
//     event.target.value = "";
//   }
// }

{
  /* <Route
          exact
          path="/:filter" //props.match.params.filter
          render={(props) => (
            <TodoList
              todos={todos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          )}
        /> */
}
