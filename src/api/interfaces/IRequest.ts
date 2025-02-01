import { AxiosHeaders } from "axios";

type MetodoHttp = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface Request {
    data: Object,
    headers: AxiosHeaders,
    metodo : MetodoHttp,
    url : string,
}