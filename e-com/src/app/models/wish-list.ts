export class WishList {
    user_id:number;
    product_id:number;
    constructor(
        user_id:number,
        product_id:number
    ){
        this.user_id = user_id;
        this.product_id = product_id;
    }
}

export class WishListItems{
    description: string;
    imageUrl: string;
    name: string;
    price: number;
    product_id:number; 
    user_id:number;

    constructor(
    description:string,
    imageUrl:string,
    name:string,
    price:number,
    product_id:number, 
    user_id:number 
    ){
        this.description = description;
        this.imageUrl = imageUrl;
        this.name = name;
        this.price = price;
        this.product_id = product_id;
        this.user_id = user_id;
    }
}