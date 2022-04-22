import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./component/Input";
import useRequest from "./api/request";
import TodoLists from "./component/TodoLists";
import { loadedData } from "./model/todo";

function App() {
  const [todo, setTodo] = useState<string>("");
  const { sendRequest, jsonData } = useRequest();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendRequest({ method: "POST", todo: todo });
    await sendRequest({method: "GET"});
    setTodo("");
  };

  const deleteHandler = async (id: string) => {
    console.log("Deleteing")
    await sendRequest({ method: "DELETE", id: id });
    await sendRequest({method: "GET"});
  };
  
  const patchHandler = async (id: string, todo: string) => {
    await sendRequest({method: "PATCH", id: id, todo: todo});
    await sendRequest({method: "GET"});
  }
  
  useEffect(() => {
    sendRequest({method: "GET"});
  }, []);

  console.log("Render");

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-start min-h-screen text-center text-white bg-black">
        <h1>Todos App</h1>
        {/* <button
          onClick={displayDataHandler}
          className="max-w-xs p-5 m-3 bg-gray-800 shadow-md shadow-white rounded-xl hover:bg-red-500"
        >
          Display Data
        </button> */}
        <Input
          todo={todo}
          setTodo={setTodo}
          submitHandler={submitHandler}
        ></Input>
        <TodoLists todoList={jsonData} deleteTodoHandler={deleteHandler} patchTodoHandler={patchHandler}></TodoLists>
      </div>
    </div>
  );
}

export default App;
