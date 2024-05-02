// src/components/TodoItem.tsx
import React, { useState } from "react";

interface Item {
  todo: string;
  status: boolean;
}

interface TodoItemProps {
  item: Item;
  onToggleTodoStatus: () => void;
  onEditTodo: (newTodo: string) => void;
  onDeleteTodo: () => void;
}

const button = "py-1 px-2 ml-1 text-cyan-600 cursor-pointer hover:bg-gray-200";
const TodoItem: React.FC<TodoItemProps> = ({ item, onToggleTodoStatus, onEditTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.todo);

  const handleEdit = () => {
    onEditTodo(editText);
    setIsEditing(false);
  };

  return (
    <li className="border-b border-gray-200 py-2 flex items-center flex-row justify-between">
      <div>
        <input
          type="checkbox"
          checked={item.status}
          onChange={onToggleTodoStatus}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            autoFocus
          />
        ) : (
          <span
            className={item.status ? "line-through" : ""}
            onDoubleClick={() => setIsEditing(true)}
          >
            {item.todo}
          </span>
        )}
      </div>

      <div>
        <span className={button}>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </span>
        <span className={button}>
          <button onClick={onDeleteTodo}>Delete</button>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
