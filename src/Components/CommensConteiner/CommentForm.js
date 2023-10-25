import {useForm} from "react-hook-form";

import {commentsService} from "../../services/commentsService";

const CommentForm = ({setComments}) => {
    const {reset, register, handleSubmit}= useForm()

    const save = async (comments)=> {
        const {data} = commentsService.create(comments)
        setComments(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'}{...register('name')}/>
            <input type="text" placeholder={'email'}{...register('email')}/>
            <input type="text" placeholder={'body'}{...register('body')}/>
            <button>create</button>
        </form>
    );
};

export {CommentForm};