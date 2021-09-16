import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function TodoList() {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    if (!inputValue) return;

    const newTodos = [...todos, { title: inputValue, done: false }];
    setTodos(newTodos);
    setInputValue("");
  };

  const markDone = (todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].done = true;
    setTodos(newTodos);
  };

  return (
    <div>
      <label htmlFor="todo-input">Todo: </label>
      <input
        id="todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo, index) => (
        <div key={index} className={todo.done ? "done" : ""}>
          {todo.title}
          {!todo.done && <button onClick={() => markDone(index)}>✔️</button>}
        </div>
      ))}
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));