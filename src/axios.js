import axios from 'axios';

const clientId = 'uzyQeLgAg7qXEP3p8-EQpTsLQ0U5Sq3Y7W0qGs9WaGM'

const instance = axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        'Authorization': `Client-ID ${clientId}`
    }
});

export default instance;