import "./App.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import User from "./Components/User";
import AddnewTodo from "./Components/AddnewTodo";
import Calender from "./Components/Calender";
import Projects from "./Components/Projects";
import Todos from "./Components/Todos";
import EditTodos from "./Components/EditTodos";
function App() {
  return (
    <div className="App">
      <Sidebar>
        <User />
        <AddnewTodo />
        <Calender />
        <Projects />
      </Sidebar>
      <Main>
        <Todos />
        <EditTodos />
      </Main>
    </div>
  );
}

export default App;
