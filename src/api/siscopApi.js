import axios from 'axios';

const baseURL = 'http://192.168.1.66:8080/api';

const siscopAPI = axios.create({ baseURL });

siscopAPI.interceptors.request.use(
    async ( config ) => {
        const token = await localStorage.getItem('token');
        if ( token ){
            config.headers['n-token'] = token;
        }
        return config;
    }
);

export default siscopAPI;