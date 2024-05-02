import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoControls from './TodoControls';
import useTodoStore from '../store/useTodoStore';

const TodoForm: React.FC = () => {
    const [todo, setTodo] = useState("");
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const toggleTodoStatus = useTodoStore((state) => state.toggleTodoStatus);
    const removeChecked = useTodoStore((state) => state.removeChecked);

    const handleAddTodo = () => {
        if (todo.trim().length === 0) {
            console.log("No char");
            return;
        }
        addTodo(todo);
        setTodo("");
    };

    return (
        <div className="flex flex-col items-center my-4">
            <div className="font-black text-3xl text-gray-600">TODO LIST</div>
            <TodoInput todo={todo} onAddTodo={handleAddTodo} onSetTodo={setTodo} />
            <TodoList todos={todos} onToggleTodoStatus={toggleTodoStatus} />
            <TodoControls todos={todos} onRemoveChecked={removeChecked} />
        </div>
    );
};

export default TodoForm;
