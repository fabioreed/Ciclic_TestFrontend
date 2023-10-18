import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.mathjs.org/v4/",
  timeout: 5000,
})