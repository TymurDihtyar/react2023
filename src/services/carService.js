import {apiServiceCars} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => apiServiceCars.get(urls.cars.base)
}

export {carService}