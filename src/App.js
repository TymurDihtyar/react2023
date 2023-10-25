import './App.css';
import {UsersConteiner} from "./Components/UsersConteiner/UsersConteiner";
import {CommentsConteiner} from "./Components/CommensConteiner/CommentsConteiner";

function App() {
  return (
    <div className="App">
      <UsersConteiner/>
      <CommentsConteiner/>
    </div>
  );
}

export {App};
