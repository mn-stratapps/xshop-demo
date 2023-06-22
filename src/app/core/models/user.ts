
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
}
