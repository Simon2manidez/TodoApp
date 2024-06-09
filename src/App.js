import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";
const App = () => (
  <ul 
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul> 
);
export default App;


