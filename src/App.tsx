import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./component/Input";
import useRequest from "./api/request";
import { loadedData } from "./model/todo";
import TodoLists from "./component/TodoLists";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<loadedData[] | undefined>([]);
  const { sendRequest, jsonData } = useRequest();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    sendRequest({ method: "POST", todo: todo });
    setTodo("");
  };

  const displayDataHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(jsonData);
  };

  const deleteHandler = (id: string) => {
    sendRequest({ method: "DELETE", id: id });
  };

  useEffect(() => {
    sendRequest({ method: "GET" });
    setTodos(jsonData);
  }, [jsonData]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-start min-h-screen text-center text-white bg-black">
        <h1>Todos App</h1>
        <button
          onClick={displayDataHandler}
          className="max-w-xs p-5 m-3 bg-gray-800 shadow-md shadow-white rounded-xl hover:bg-red-500"
        >
          Display Data
        </button>
        <Input
          todo={todo}
          setTodo={setTodo}
          submitHandler={submitHandler}
        ></Input>
        <TodoLists todoList={todos} deleteTodoHandler={deleteHandler}></TodoLists>
      </div>
    </div>
  );
}

export default App;
