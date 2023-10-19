import {axiosServises} from "./axiosServises";
import {urls} from "../constants/constants";


const launchServises = {
    getAll: ()=> axiosServises.get(urls.launches.base),
    getById: (id)=> axiosServises.get(urls.launches.byId(id)),
}

export {launchServises}