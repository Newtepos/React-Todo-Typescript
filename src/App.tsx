import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./component/Input";
import TodoLists from "./component/TodoLists";
import {insertData,readData,deleteData, updateData} from './initFirebase';


function App() {
  
  const [todo, setTodo] = useState<string>("");

  const [todos,setTodos] = useState<any>([])

  useEffect(()=>{
    readData((snapshot)=>{
        const arr = []
        for(let key in snapshot){
          arr.push({id:key, ...snapshot[key]})
        }
        setTodos(arr);     
        
  })},[])
  
  const submitHandler = (e:React.FormEvent)=>{
    e.preventDefault();
    const response = insertData(todo);
    console.log(response)
  }

  const deleteHandler = async (id: string) => {
    deleteData(id);
  };

  const patchHandler = async (id: string, todo: string) => {
    updateData(id, todo);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-start min-h-screen text-center text-white bg-black">
        <h1>Todos App</h1>
        <Input
          todo={todo}
          setTodo={setTodo}
          submitHandler={submitHandler}
        ></Input>
        <TodoLists
          todoList={todos}
          deleteTodoHandler={deleteHandler}
          patchTodoHandler={patchHandler}
        ></TodoLists>
      </div>
    </div>
  );
}

export default App;
