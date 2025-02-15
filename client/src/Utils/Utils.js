import axios from "axios";

const API=axios.create({baseURL:"https://todo-list-beckend.vercel.app/"})

export {axios,API}
