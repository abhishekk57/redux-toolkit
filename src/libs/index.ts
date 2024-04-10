import axios, { type AxiosInstance } from 'axios';

export default function makeApi(baseURL: string): AxiosInstance {
    const api = axios.create({ baseURL });
    api.defaults.headers['Content-Type'] = 'application/json';
    api.interceptors.request.use(
        (config: any) => {
            return config;
        },
        async (error: any) => {
            return Promise.reject(error);
        },
    );

    api.interceptors.response.use(
        (response: any) => response.data,
        async (error: any) => Promise.reject(error),
    );
    return api;
}