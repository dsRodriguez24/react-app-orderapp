import { AxiosHeaders } from "axios";

type MetodoHttp = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface Request {
    data: Object,
    headers: any,
    metodo : MetodoHttp,
    url : string,
}