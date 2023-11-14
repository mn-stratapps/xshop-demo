
export class User {
    id: number;
    username: string;
    password:string;
    email:string;
    first_name:string;
    last_name:string;
    mobile_number:number;
    token:string;
    confirmPassword:string;
    // new_password:string;
}
export class Userlist{
    id: number;
    username: string;
    password:string;
    email:string;
    first_name:string;
    last_name:string;
    mobile_number:number;
    token:string;
    confirmPassword:string;
    is_active:boolean;
    last_Login:number; 
}
export class Metrics{
    total_orders:string;
    pending_orders:string;
    wishlist_count:string;
    total_products:string;
    total_sales:string;
}
export class VendorDetails{
    org_name:string;
    email:string;
    mobile:string;
    description:string;
    address:string;
    city:string;
    state:string;
    pincode:string;
    country:string;
    date_joined:string;
}