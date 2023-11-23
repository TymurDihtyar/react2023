import {Component} from "react";

class Comments extends Component {

    render() {
        const {id, name, email, body} = this.props.comment;
        return (
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
                <hr/>
            </div>
        )
    }
}

export {Comments}