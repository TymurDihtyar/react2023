import {axiosService} from "./axiosService";
import {urls} from "../constants/constants";

const postsService = {
    getAll: () => axiosService.get(urls.posts.base),
    getById: (id) => axiosService.get(urls.posts.byPostId(id))
}

export {postsService}