import {apiServiceCommentsPosts} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiServiceCommentsPosts.get(urls.comments.base)
}
export {commentsService}