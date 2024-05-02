import { create } from "zustand";
import { Item } from "../types/todoTypes";

interface TodoStore {
  todos: Item[];
  addTodo: (todo: string) => void;
  toggleTodoStatus: (index: number) => void;
  removeChecked: () => void;
  editTodo: (index: number, newTodo: string) => void;
  deleteTodo: (index: number) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, { todo, status: false }],
    })),
  toggleTodoStatus: (index) =>
    set((state) => ({
      todos: state.todos.map((item, id) =>
        id === index ? { ...item, status: !item.status } : item
      ),
    })),
  removeChecked: () =>
    set((state) => ({
      todos: state.todos.filter((item) => !item.status),
    })),
  editTodo: (index, newTodo) =>
    set((state) => ({
      todos: state.todos.map((item, id) =>
        id === index ? { ...item, todo: newTodo } : item
      ),
    })),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, id) => id !== index),
    })),
}));

export default useTodoStore;
