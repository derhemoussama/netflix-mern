import axios from "axios";

const isntance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default isntance;

