import React from "react";
import { loadedData } from "../model/todo";
import Todo from "./Todo";

interface Props {
  todoList: loadedData[] | undefined;
  deleteTodoHandler: (id: string) => void
  patchTodoHandler: (id: string, todo: string) => void
}

const TodoLists = (props: Props): JSX.Element => {


    if(props.todoList) {
        return <ul>{props.todoList.map((item) => (
            <Todo key={item.id} todo={item.todo} id={item.id} deleteTodoHandler={props.deleteTodoHandler} patchTodoHandler={props.patchTodoHandler}/>
        ))}</ul>
    }
    return <div>No Todo</div>
}

export default TodoLists;
