// Products
export interface Product {
    id?: number;
    title?: string;
    description?: string;
    type?: string;
    brand?: string;
    collection?: any[];
    category?: string;
    price?: number;
    sale?: boolean;
    discount?: number;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];
    variants?: Variants[];
    images?: Images[];
    review?: any[];
    product_name?:string;
    unit_price?:number;
    dis_price?:number;
    image1_url?:string;
    sold_by?:string;
    Rating?:string;
}

export interface Variants {
    variant_id?: number;
    id?: number;
    sku?: string;
    size?: string;
    color?: string;
    image_id?: number;
}

export interface Images {
    image_id?: number;
    id?: number;
    alt?: string;
    src?: string;
    variant_id?: any[];
}
export interface review {
    username?: string,
    created_at?:string,
    images?:string,
    comments?:string,
    rating?:string,
    product_id?:string,
           
}