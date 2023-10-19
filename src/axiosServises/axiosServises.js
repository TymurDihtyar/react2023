import axios from "axios";
import {baseURL} from "../constants/constants";


const axiosServises = axios.create({baseURL})


export {axiosServises}