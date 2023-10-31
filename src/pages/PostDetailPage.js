import {PostDetails} from "../Components/PostContainer/PostDetails";
import {useLoaderData} from "react-router-dom";

const PostDetailPage = () => {
    const {data} = useLoaderData()

    return (
        <div>
            <PostDetails post={data}/>
        </div>
    );
};

export {PostDetailPage};