import {axiosService} from "./axiosService";
import {urls} from "../constants/constants";

const commentsService = {
    getAll: () => axiosService.get(urls.comments)
}

export {commentsService}