import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: () => axiosService.post(urls.cars.base),
    create: (data) => axiosService.post(urls.cars.base, data),
    update: (id, data) => axiosService.put(urls.cars.byId(id), data),
    delete: (id) => axiosService.delete(urls.cars.byId(id))
}

export {carsService}