import axios from "axios";
import { baseApi } from "./base";

export function getTodos(userId, options){
    return baseApi.get(`users/${userId}/todos`,options).then(res => res.data);
}