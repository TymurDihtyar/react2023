import './App.css';
import {CarsContainer} from "./components/Cars/CarsContainer";
import {CommentsContainer} from "./components/Comments/CommentsContainer";
import {PostContainer} from "./components/Posts/PostContainer";

function App() {
    return (
        <div className="App">
            <CommentsContainer/>
            <PostContainer/>
            <CarsContainer/>
        </div>
    );
}

export {App};
