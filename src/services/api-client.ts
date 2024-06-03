import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '9ed0957cd8d14be781de5ea1dceb5672'
    }
})