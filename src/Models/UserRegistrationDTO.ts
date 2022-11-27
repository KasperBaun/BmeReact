export class UserRegistrationDTO {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    age?: number;
    gender?: string;

    constructor(firstName: string, lastName: string, password: string, email: string, age?: number, gender?: string ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        if(age){
            this.age = age;
        }
        if(gender){
            this.gender = gender;
        }
        
    }
}