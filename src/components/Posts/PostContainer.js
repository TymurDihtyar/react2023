import {Component} from "react";
import {postServise} from "../../services/postServise";
import {Posts} from "./Posts";

class PostContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        postServise.getAll().then(({data})=> this.setState({posts: data}))
    }

    render() {
        return(
            <div style={{width: '100%', padding:'10px'}}>
                <h1>Posts</h1>
                {this.state.posts.map(post=> <Posts key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {PostContainer}