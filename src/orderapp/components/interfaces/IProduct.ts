export interface CardParams {
    id: number,
    nombre: string,
    codigo: number,
    precio: number,
    stock: number,
    imagen?: string,
}

export interface ProductParams {
    id: number,
    nombre: string,
    codigo: number,
    precio_venta?: number,
    cantidad?: number,
    precio_compra: number,
    stock?: number,
    imagen?: string,
}

