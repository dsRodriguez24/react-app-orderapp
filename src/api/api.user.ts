import { sendUrlRequest } from "./api.send.request"
// import { Request } from "./interfaces/IRequest";

export const sendRegister = async ( data: Object )=> {
    const dataReq: any = {
        data,
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": "",
            },
        },
        metodo: 'POST',
        url: '/auth/register'
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}

export const sendLogin = async ( data: Object )=> {
    const dataReq: any = {
        data,
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": "",
            },
        },
        metodo: 'POST',
        url: '/auth/login'
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}

export const getUsersAdmin = async ( token : string )=> {
    const dataReq: any = {
        data:{},
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": token,
            },
        },
        metodo: 'GET',
        url: '/users'
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}