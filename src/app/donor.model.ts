export class Donor {
    public name: string;
    public email: string;
    public contact: string;
    public count: number;

    constructor(name: string, email: string, contact: string, count: number) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.count = count;
    }
}