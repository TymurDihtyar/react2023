import {apiService} from "./apiService";
import {urls} from "../components/constants/urls";

const episodeService ={
    getAll: (page)=> apiService.get(urls.episodes, {params:{page}})
}

export {episodeService}