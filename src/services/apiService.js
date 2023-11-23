import axios from "axios";
import {baseURLCars, baseURLCommentsPosts} from "../constants/urls";

const apiServiceCars = axios.create({baseURL: baseURLCars})
const apiServiceCommentsPosts = axios.create({baseURL: baseURLCommentsPosts})

export {apiServiceCars, apiServiceCommentsPosts}