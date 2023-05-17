import { Product } from './product';

// Order
export interface Order {
    address?: any;
    product?: Product;
    orderId?: any;
    Total_order_amount?: any;
    Order_data?:any;
    order_date?:any;
    Transaction_id?:any;
    payment_method?:any;
}