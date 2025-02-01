import { useState } from "react";

export const useForm = ( fields: any) => {
    
    const [ form, setForm ] = useState(fields)
    const changeForm = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    
    return {
        changeForm,
        setForm,
        ...form
    };
}