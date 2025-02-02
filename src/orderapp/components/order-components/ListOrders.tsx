
export const ListOrders = () => {
  return (
    <>
        <h1 className="text-2xl my-4">Tus ordenes de compra</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Fecha
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Hecha por
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Hecha a
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ver detalle
                    </th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </>
  )
}
