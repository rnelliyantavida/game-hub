import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'd30934d5f8384b93ab0ccd8706b085ee'
    }
})