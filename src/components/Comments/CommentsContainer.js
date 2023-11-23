import {Component} from "react";
import {Comments} from "./Comments";
import {commentsService} from "../../services/commentsService";

class CommentsContainer extends Component{

    constructor(props) {
        super(props);
        this.state={
            comments: []
        }
    }

    componentDidMount() {
        commentsService.getAll().then(({data})=> this.setState({comments: data}))
    }

    render() {
        return (
            <div style={{width: '100%', padding:'10px'}}>
                <h1>Comments</h1>
                {this.state.comments.map(comment => <Comments key={comment.id} comment={comment}/>)}
            </div>
        )
    }

}

export {CommentsContainer}