export class PersonalInfo {
    constructor(
        public firstname: string,
        public lastname: string,
        public preferredname: string,
        public age: number,
        public ssn: number
    ) { }
}

export class ContactInfo {
    constructor(
        public personalEmail: string,
        public workEmail: string,
        public cellphone: number,
        public workphone: number
    ) { }
}

export class AddressInfo {
    constructor(
        public street: string,
        public city: string,
        public state: string,
        public zip: number
    ) { }

}