import { useState } from "react";
// import { ModalProductProps } from "./interfaces/IModalProduct";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { ModalProductFooter } from "./ModalProductFooter";
import { ModalProductBody } from "./ModalProductBody";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export const ModalProduct = ( ) => {
    const { rol } = useSelector( (state: any ) => state.main )

    const [open, setOpen] = useState(false);

  return (
    <>
        <div className="w-full text-center my-3">
            <button disabled={rol != 1 ? true : false} title={rol != 1 ? "No puedes crear productos" : ""} onClick={() => setOpen(true)}  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center gap-2 mx-auto">
                <PlusCircleIcon className="h-6 w-6 text-white" /> 
                Nuevo Producto
            </button>
        </div>



        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel transition className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">

                        <ModalProductBody/>

                        <ModalProductFooter/>
                    </DialogPanel>
                </div>
            </div>
      </Dialog>
    </>
  );
};
