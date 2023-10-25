import {Comment} from "./Comment";
import {CommentForm} from "./CommentForm";

const Comments = ({comments, setComments}) => {

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            {comments.map(item => <Comment key={item.id} item={item}/>)}
        </div>
    );
};

export {Comments};