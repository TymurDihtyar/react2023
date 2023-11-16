import {apiService} from "./apiService";
import {urls} from "../components/constants/urls";

const characterService = {
    getByIds: (ids)=> apiService.get(urls.characters.byId(ids))
}

export  {characterService}