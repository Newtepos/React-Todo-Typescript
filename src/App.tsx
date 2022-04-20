import React, { useState } from "react";
import "./App.css";
import { Input } from "./component/Input";
import todo from "./model/todo";

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<todo[]>([]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { name: todo, isCheck: false }]);
      setTodo("");
    }
  };

  return (
    <div className="app_container">
      <h1>Todos App</h1>
      <Input todo={todo} setTodo={setTodo} submitHandler={submitHandler}></Input>
      {todos.map(items => <li>{items.name}</li>)}
    </div>
  );
}

export default App;
