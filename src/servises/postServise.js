import {axiosServis} from "./axiosServis";
import {urls} from "../constats/urls";

const postServise = {
    getAll: () => axiosServis.get(urls.posts.base),
    getById: (id) => axiosServis.get(urls.posts.byId(id))
}

export {postServise}