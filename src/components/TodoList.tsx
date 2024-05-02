// src/components/TodoList.tsx
import TodoItem from './TodoItem';
import useTodoStore from '../store/useTodoStore';



const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodoStatus = useTodoStore((state) => state.toggleTodoStatus);
  const editTodo = useTodoStore((state) => state.editTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <ul className="w-5/6">
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onToggleTodoStatus={() => toggleTodoStatus(index)}
          onEditTodo={(newTodo) => editTodo(index, newTodo)}
          onDeleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
