import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.green-api.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
