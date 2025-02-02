import { sendUrlRequest } from "./api.send.request"

export const saveProduct = async ( data: Object, token: string )=> {
    const dataReq: any = {
        data,
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": token,
            },
        },
        metodo: 'POST',
        url: '/products'
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}

export const getProducts = async ( token: string )=> {
    const dataReq: any = {
        data: {},
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": token,
            },
        },
        metodo: 'GET',
        url: '/products'
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}

export const getProductById = async ( token: string, id: number )=> {
    const dataReq: any = {
        data: {},
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": token,
            },
        },
        metodo: 'GET',
        url: `/products/${id}`
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}

export const deleteProductById = async ( token: string, id: number )=> {
    const dataReq: any = {
        data: {},
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": token,
            },
        },
        metodo: 'DELETE',
        url: `/products/${id}`
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}

export const updateProductById = async ( token: string, id: number, data: Object )=> {
    const dataReq: any = {
        data,
        headers: {
            headers: {
                "Content-Type": "application/json",
                "authorization": token,
            },
        },
        metodo: 'PUT',
        url: `/products/${id}`
    }
    const datos = await sendUrlRequest(dataReq);
    return datos;
}