import { sendUrlRequest } from "./api.send.request"

export const getRol = async ( data: Object )=> {
    const dataReq: any = {
        data,
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": "",
            },
        },
        metodo: 'GET',
        url: '/rol'
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}