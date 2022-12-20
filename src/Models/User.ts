export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    age?: number;
    gender?: string;

    constructor(id: number, firstName: string, lastName: string, email: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.createdAt = new Date().toDateString();
        
    }

}

