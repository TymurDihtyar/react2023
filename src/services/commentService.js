import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getByPostId: (PostId) => axiosService.get(urls.comments.byPostId(PostId))
}

export {commentService}