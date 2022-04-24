import React from "react";
import { TodoType } from "../model/todo";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: (status: TodoType) => void
}

export const Input: React.FC<Props> = ({ todo, setTodo, submitHandler }: Props) => {

  const createTodoHandler =  (e: React.FormEvent) => {
    e.preventDefault();
    submitHandler("CREATED");
  }


  return (
    <form onSubmit={createTodoHandler}>
      <input
        type="text"
        placeholder="Please Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="px-5 text-black"
      ></input>
      <button type="submit" className="px-5 mx-5 bg-blue-900 rounded-xl">Enter</button>
    </form>
  );
};
