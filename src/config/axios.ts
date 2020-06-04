import axios from 'axios';
import { endPoint } from './endPoint';

const api = axios.create({
    baseURL: endPoint,
})

export default api