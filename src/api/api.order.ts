import { sendUrlRequest } from "./api.send.request"

export const saveOrder = async ( data: Object, token: string )=> {
    const dataReq: any = {
        data,
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": token,
            },
        },
        metodo: 'POST',
        url: '/order'
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}