import { Product } from './product';

// Order
export interface Order {
    address?: any;
    product?: Product;
    orderId?: any;
    Total_order_amount?: any;
    Order_data?:any;
    order_date?:any;
    transaction_id?:any;
    payment_method?:any;
    processing_fee?:any;
    subtotal?:any;
    shipping_charge?:any;
    parent_order_id?:any;
}