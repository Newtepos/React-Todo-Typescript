import React, { useEffect, useState } from "react";
import "./App.css";
import DoingTodoList from "./component/DoingTodoList";
import DoneTodoList from "./component/DoneTodoList";
import { Input } from "./component/Input";
import TodoLists from "./component/TodoLists";
import { insertData, readData, deleteData, updateData } from "./initFirebase";
import { TodoType } from "./model/todo";

function App() {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    readData((snapshot) => {
      const arr = [];
      for (let key in snapshot) {
        arr.push({ id: key, ...snapshot[key] });
      }
      setTodos(arr);
    });
  }, []);

  const submitHandler = (status: TodoType) => {
    const response = insertData(todo, status);
    setTodo("");
    console.log(todos);
  };

  const deleteHandler = async (id: string) => {
    deleteData(id);
  };

  const patchHandler = async (id: string, todo?: string, status?: string) => {
    updateData(id, todo, status);
  };

  return (
    <div className="container h-full mx-auto">
      <div className="flex flex-col items-center justify-start h-5 min-h-screen pb-5 text-center text-white bg-black">
        <h1 className="my-5 text-5xl font-medium">Todos App</h1>
        <Input
          todo={todo}
          setTodo={setTodo}
          submitHandler={submitHandler}
        ></Input>
        <div className="flex flex-row h-full gap-5 pb-5">
          <TodoLists
            todoList={todos}
            deleteTodoHandler={deleteHandler}
            patchTodoHandler={patchHandler}
          ></TodoLists>
          <DoingTodoList
            todoList={todos}
            deleteTodoHandler={deleteHandler}
            patchTodoHandler={patchHandler}
          ></DoingTodoList>
          <DoneTodoList
            todoList={todos}
            deleteTodoHandler={deleteHandler}
            patchTodoHandler={patchHandler}
          ></DoneTodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
