export class Product {
    id:number;
    name:string;
    category_id:number;
    price:number;
    imageUrl:string;
    qty:number;
    description:string;
    constructor(id, name, category_id, price, imageUrl, qty, description){
        this.id = id;
        this.name = name;
        this.category_id = category_id;
        this.price = price;
        this.imageUrl = imageUrl; 
        this.qty = qty;
        this.description = description;
    }
}
