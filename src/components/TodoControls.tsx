import React from 'react';

interface Item {
  status: boolean;
}

interface TodoControlsProps {
  todos: Item[];
  onRemoveChecked: () => void;
}

const TodoControls: React.FC<TodoControlsProps> = ({ todos, onRemoveChecked }) => {
  const completedCount = todos.filter(todo => todo.status).length;

  return (
    <div className="flex flex-row justify-between items-center mt-4 w-5/6">
      <div className="bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded shadow">
        {completedCount} of {todos.length} tasks done
      </div>
      <button
        onClick={onRemoveChecked}
        className="mt-2 bg-red-600 text-white py-2 px-4 rounded shadow cursor-pointer"
      >
        Remove checked
      </button>
    </div>
  );
};

export default TodoControls;
