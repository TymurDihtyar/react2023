import {PostDetails} from "../Components/PostContainer/PostDetails";
import {Outlet, useLoaderData} from "react-router-dom";

const PostDetailPage = () => {
    const {data} = useLoaderData()
    console.log(data);
    return (
        <>
            <h1>POST DETAILS</h1>
            <div>
                <PostDetails post={data}/>
            </div>
            <Outlet/>
        </>
    );
};

export {PostDetailPage};