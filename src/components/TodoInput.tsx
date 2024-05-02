import React from 'react';

interface TodoInputProps {
  todo: string;
  onAddTodo: () => void;
  onSetTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ todo, onAddTodo, onSetTodo }) => {
  return (
    <div className="flex flex-row w-5/6 my-2 justify-center">
      <input
        type="text"
        value={todo}
        onChange={(e) => onSetTodo(e.target.value)}
        className="w-5/6 border-cyan-600 border py-2 text-center italic text-cyan-600 rounded"
        placeholder="What needs to be done?"
      />
      <button
        className="text-3xl text-white bg-cyan-600 mx-2 px-4 cursor-pointer"
        onClick={onAddTodo}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
