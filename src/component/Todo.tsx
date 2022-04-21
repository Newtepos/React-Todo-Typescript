import React, { Fragment, useRef, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

interface Props {
  id: string;
  todo: string;
  deleteTodoHandler: (id: string) => void;
}

const Todo: React.FC<Props> = (props) => {
  const todoRef = useRef<HTMLDivElement>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const deleteHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    props.deleteTodoHandler(props.id);
  };

  const clickEditHandler = (e: React.MouseEvent<SVGAElement>) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    console.log(isEdit);
  };

  const Testing = () => {
    if (isEdit) {
      return <Fragment>FALSE EDIT STATE</Fragment>;
    } else {
      return <Fragment>TRUE EDIT STATE</Fragment>;
    }
  };

  return (
    <li className="box-border flex flex-row items-center justify-between h-auto p-3 m-3 bg-gray-800 rounded-md w-72">
      {isEdit ? (
        <div>Editing</div>
      ) : (
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
      )}
    </li>
  );
};

export default Todo;
