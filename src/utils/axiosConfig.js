import axios from 'axios';
import {baseUrl} from '../config/app';

export const requestInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
});

