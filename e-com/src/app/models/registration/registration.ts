export class Registration {
    name:string;
    mobileNumber:number;
    email:string;
    pass:string;

    constructor(
        name:string,
        mobileNumber:number,
        email:string,
        pass:string
    ){
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.pass = pass;
    }
}
