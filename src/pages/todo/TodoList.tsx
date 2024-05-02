// import TodoForm from "../../arc/TodoForm";
import TodoForm from "../../components/TodoForm";

const TodoList = () => {
  return (
    <>
      <div className="min-w-[450px]  w-full  bg-white rounded-lg flex flex-col shadow-md">
        <div>
          <TodoForm />
        </div>
      </div>
    </>
  );
};

export default TodoList;
