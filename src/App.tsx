import TodoList from "./pages/todo";

function App() {
  return (
    <>
      <div className="flex flex-col items-center  h-screen  bg-cyan-600">
        <div className="w-2/5 my-24">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
