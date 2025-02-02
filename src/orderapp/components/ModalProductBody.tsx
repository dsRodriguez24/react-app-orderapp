import { DialogTitle } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ModalProductForm } from './ModalProductForm';


export const ModalProductBody = () => {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                <PlusCircleIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <DialogTitle as="h1" className="text-base font-semibold text-gray-900" > Nuevo producto </DialogTitle>
            <div className="mt-2">
                <ModalProductForm/>
            </div>
            </div>
        </div>
        </div>
    )
    
}
