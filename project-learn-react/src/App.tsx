import Home from "./Home";
import Navbar from "./Navbar";
import ListTodos from "./Todos/ListTodos";
import Recipe from "./apifood/Recipe";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <ListTodos /> */}
        <Recipe />
      </div>
    </div>
  );
}

export default App;
