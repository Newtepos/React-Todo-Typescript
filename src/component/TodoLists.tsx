import React from "react";
import { loadedData } from "../model/todo";
import Todo from "./Todo";

interface Props {
  todoList: loadedData[] | undefined;
  deleteTodoHandler: (id: string) => void;
  patchTodoHandler: (id: string, todo: string) => void;
}

const TodoLists = (props: Props): JSX.Element => {
  if (props.todoList) {
    return (
      <ul className="flex flex-col items-center justify-start h-full px-4 pb-3 mt-5 bg-gray-600 rounded-md">
        <div className="py-2 my-5 text-2xl font-bold bg-blue-500 rounded-sm w-72 text-white-900">TASK</div>
        {props.todoList.map((item) => (
          <Todo
            key={item.id}
            todo={item.todo}
            id={item.id}
            deleteTodoHandler={props.deleteTodoHandler}
            patchTodoHandler={props.patchTodoHandler}
          />
        ))}
      </ul>
    );
  }
  return <div>No Todo</div>;
};

export default TodoLists;
