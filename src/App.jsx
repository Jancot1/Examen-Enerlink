
import { TodoList, TodoResults } from "./components";
import "./App.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="root">
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
      <div className="card border-info">
        <TodoList />
      </div>
      <TodoResults />
    </div>
  );
};

export default App;