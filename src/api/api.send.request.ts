import axios from "axios";
import { Request } from "./interfaces/IRequest";
import store from "../app/store";
import { logout } from "../app/slices/main.slice";
import Swal from "sweetalert2";

const BASEPATH = "http://localhost:8080";

export const sendUrlRequest = async ( { url, data, headers, metodo } : Request ) => {


    try {
        
        url = `${BASEPATH}${url}`;  

        switch (metodo) {
            case 'GET':
                const resp_get  = await axios.get(url, headers );
                const datos_get = resp_get.data;
                // console.log("Respuesta get axios ", datos_get);
                

                return datos_get;
                
            case 'POST':
                const resp_post  = await axios.post(url, data, headers );
                const datos_post = resp_post.data;
                console.log("Respuesta Axios" , datos_post);
                
                return datos_post;
            
            case 'PUT':
            const resp_put  = await axios.put(url, data, headers );
            const datos_put = resp_put.data;
                return datos_put;
    
            case 'DELETE':
            const resp_delete  = await axios.delete(url, headers );
            const datos_delete = resp_delete.data;
                return datos_delete;
        
            default:
                throw new Error("Metodo no especificado o incorrecto");
                break;
        }

    } catch (error: any) {

        if (error.response.data.errorAuth) {
            store.dispatch(logout());
            Swal.fire({title: "Error", text: error.response.data.message, icon: "error" })
        }

        return { status: false, message: error.response.data.message }
    }
}