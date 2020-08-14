import axios from 'axios';

const clientId = 'uzyQeLgAg7qXEP3p8-EQpTsLQ0U5Sq3Y7W0qGs9WaGM'

const instance = axios.create({
    baseURL: `https://api.unsplash.com/photos/random/?client_id=${clientId}`
});

export default instance;