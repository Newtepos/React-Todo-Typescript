import React from "react";
import { loadedData, TodoType } from "../model/todo";
import Todo from "./Todo";
import { useDrop } from "react-dnd";
interface Props {
  todoList: loadedData[] | undefined;
  deleteTodoHandler: (id: string) => void;
  patchTodoHandler: (id: string, todo?: string, status?: TodoType) => void;
}

const DoingTodoList = (props: Props): JSX.Element => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Card",
    drop: (item: any) => {
      // console.log(item);
      props.patchTodoHandler(item.id, undefined, "DOING");
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  if (props.todoList) {
    return (
      <ul ref={drop} className="flex flex-col items-center justify-start h-full px-4 pb-3 mt-5 bg-gray-600 rounded-md">
        <div className="my-5 text-2xl font-bold text-center rounded-sm w-72 text-white-900">
          Doing
        </div>
        {props.todoList.filter((item) => item.status === "DOING").map((item) => (
          <Todo
            key={item.id}
            todo={item.todo}
            id={item.id}
            status={item.status}
            deleteTodoHandler={props.deleteTodoHandler}
            patchTodoHandler={props.patchTodoHandler}
          />
        ))}
      </ul>
    );
  }
  return <div>No Todo</div>;
};

export default DoingTodoList;
