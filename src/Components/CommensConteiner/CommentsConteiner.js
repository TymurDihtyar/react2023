import {useEffect, useState} from "react";

import {commentsService} from "../../services/commentsService";
import {Comments} from "./Comments";

const CommentsConteiner = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, [setComments]);

    return (
        <div style={{width: '50%'}}>
            <Comments comments={comments} setComments={setComments}/>
        </div>
    );
};

export {CommentsConteiner};