import {axiosService} from "./axiosService";
import {urls} from "../constants/constants";

const albumsService = {
    getAll: () => axiosService.get(urls.albums)
}

export {albumsService}