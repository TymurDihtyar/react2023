import axios from "axios";
import {baseUrl} from "../constats/urls";

const axiosServis = axios.create({baseURL:baseUrl})



export {axiosServis}