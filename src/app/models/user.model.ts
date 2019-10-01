export class User {
    emailId: number;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;

    constructor(
        emailId: number,
        password: string,
        firstName: string,
        lastName: string,
        phoneNumber: string){
        
        this.emailId = emailId;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}