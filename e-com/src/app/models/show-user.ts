export class ShowUser {
    id:number;
    name:string;
    mobileNumber:number;
    email:string;
    datetime:string;

    constructor(
        id:number, 
        name:string,
        mobileNumber:number,
        email:string,
        datetime:string
         ){
            this.id = id;
            this.name = name;
            this.mobileNumber = mobileNumber;
            this.email = email;
            this.datetime = datetime;
    }
}
