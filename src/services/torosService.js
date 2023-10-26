import {axiosService} from "./axiosService";
import {urls} from "../constants/constants";

const torosService = {
    getAll: ()=> axiosService.get(urls.todos)
}

export {torosService}