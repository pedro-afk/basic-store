import axios from 'axios';

const api = axios.create({
    baseURL: "https://ecommerce-elaine.herokuapp.com/"
});

export default api;