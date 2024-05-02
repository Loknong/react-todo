import { useState } from "react";
import useTodoStore from "../store/useTodoStore"; // Adjust the import path as necessary

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);
  const toggleTodoStatus = useTodoStore((state) => state.toggleTodoStatus);

  const handleAddTodo = () => {
    if (todo.trim().length === 0) {
      console.log("Attempted to add an empty todo.");
      return;
    }
    addTodo(todo);
    console.log(`Added todo: ${todo}`);
    setTodo("");
  };

  return (
    <div className="flex flex-col items-center my-4">
      <div className="font-black text-3xl text-gray-600">TODO LIST</div>
      <div className="flex flex-row w-5/6 my-2 justify-center">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-5/6 border-cyan-600 border py-2 text-center italic text-cyan-600 rounded"
          placeholder="What needs to be done?"
        />
        <button
          className="text-3xl text-white bg-cyan-600 mx-2 px-4 cursor-pointer "
          onClick={handleAddTodo}
        >
          +
        </button>
      </div>
      <ul className="w-5/6">
        {/* {todos.map((item, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            {item.status ? 'Done' : 'Pending'} {item.todo}
          </li>
        ))} */}
        {todos.map((item, index) => (
          <li
            key={index}
            className="border-b border-gray-200 py-2 flex items-center "
          >
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => toggleTodoStatus(index)}
              className="mr-2"
            />
            <span className={item.status ? "line-through" : ""}>
              {item.todo}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 flex-col justify-end w-5/6">
        <div className="flex flex-row justify-between border-t pt-2">
          <div>Progress</div>
          <div>Action</div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
