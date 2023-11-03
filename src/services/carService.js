import {axiosService} from "./axiosService";
import {urls} from "../constants";

const carService = {
    getAll: ()=> axiosService.get(urls.cars.base),
    create: (data)=> axiosService.post(urls.cars.base, data)
}

export {
    carService
}