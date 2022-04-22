import React, { Fragment, useRef, useState } from "react";
import { MdEdit, MdDelete, MdClose, MdDone } from "react-icons/md";

interface Props {
  id: string;
  todo: string;
  deleteTodoHandler: (id: string) => void;
  patchTodoHandler: (id: string, todo: string) => void
}

const Todo: React.FC<Props> = (props) => {
  const todoRef = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const deleteHandler = () => {
    props.deleteTodoHandler(props.id);
  };

  const clickEditHandler = () => {
    setIsEdit((prev) => !prev);
    console.log(isEdit);
  };

  const editTodoHandler = () => {
    props.patchTodoHandler(props.id, todoRef.current!.value);
    setIsEdit(false);
  }

  const EditComponent = (): JSX.Element => {
    return (
      <Fragment>
        <input
          className="ml-2 text-xl text-black"
          defaultValue={props.todo}
          ref={todoRef}
          autoFocus
          onChange={(e) => console.log(e.target.value)}
        ></input>
        <div className="flex flex-row mr-2">
          <MdDone className="w-8 h-8 p-2 mr-2 text-white bg-gray-600 rounded-full cursor-pointer hover:bg-gray-900 hover:border-red-500" onClick={editTodoHandler} />
          <MdClose
            className="w-8 h-8 p-2 text-white bg-gray-600 rounded-full cursor-pointer hover:bg-gray-900 hover:border-red-500"
            onClick={clickEditHandler}
          />
        </div>
      </Fragment>
    );
  };

  const TodoRenderComponent = (): JSX.Element => {
    return (
      <Fragment>
        <div className="ml-2 text-xl">{props.todo}</div>
        <div className="flex flex-row mr-2">
          <MdEdit
            onClick={clickEditHandler}
            className="w-8 h-8 p-2 mr-2 text-white bg-gray-600 rounded-full cursor-pointer hover:bg-gray-900 hover:border-red-500"
          />
          <MdDelete
            onClick={deleteHandler}
            className="w-8 h-8 p-2 text-white bg-gray-600 rounded-full cursor-pointer hover:bg-gray-900 hover:border-red-500"
          />
        </div>
      </Fragment>
    );
  };

  return (
    <li className="box-border flex flex-row items-center justify-between h-auto p-3 m-3 bg-gray-800 rounded-md w-72">
      {isEdit ? <EditComponent /> : <TodoRenderComponent />}
    </li>
  );
};

export default Todo;
