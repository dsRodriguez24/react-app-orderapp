import Swal from "sweetalert2";

export const generarSweetAlert = (status: boolean, message: string) => {
    Swal.fire({
        title: status ? 'Correcto' : 'Error',
        text: message,
        icon: status ? 'success' : 'error'
    });
}