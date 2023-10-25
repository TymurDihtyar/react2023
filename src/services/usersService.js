import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    create: (data) => axiosService.post(urls.users, data)
}

export {usersService}