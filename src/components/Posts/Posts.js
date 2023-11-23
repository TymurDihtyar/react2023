import {Component} from "react";

class Posts extends Component {

    render() {
        const {id, title, body} = this.props.post;
        return (
            <div>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
                <hr/>
            </div>
        )
    }
}

export {Posts}