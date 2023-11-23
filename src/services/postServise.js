import {apiServiceCommentsPosts} from "./apiService";
import {urls} from "../constants/urls";

const postServise = {
    getAll: ()=> apiServiceCommentsPosts.get(urls.posts.base)
}
export {postServise}