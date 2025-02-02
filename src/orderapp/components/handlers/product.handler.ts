import Swal from "sweetalert2";
import { deleteProductById, updateProductById } from "../../../api/api.product";
import { generarSweetAlert } from "../../../helpers/sweetalert";

export const handleDeleteProduct =  (id: number, token:string) => {
    
    let statusEnd = false;
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
    }).then(async (result) => {
        if (result.isConfirmed) {
            const respuesta = await deleteProductById(token, id);
            const { message, status } = respuesta;
            generarSweetAlert(status, message)
            statusEnd = status;
        } 
    });
    return statusEnd;
};

export const handleUpdateProduct = async ( token:string, id: number, data: Object ) => {
    const respuesta = await updateProductById(token, id, data);
    const { message, status } = respuesta;
    generarSweetAlert(status, message)
    return status;
}