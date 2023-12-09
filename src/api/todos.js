import axios from "axios";
import { baseApi } from "./base";

export function getUserTodos(userId, options) {
  return baseApi.get(`users/${userId}/todos`, options).then((res) => res.data);
}

export function getTodos(options) {
  return baseApi.get("/todos", options).then((res) => res.data);
}
