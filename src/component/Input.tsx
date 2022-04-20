import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: (e: React.FormEvent) => void
}

export const Input: React.FC<Props> = ({ todo, setTodo, submitHandler }: Props) => {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="please add todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit">Enter</button>
    </form>
  );
};
