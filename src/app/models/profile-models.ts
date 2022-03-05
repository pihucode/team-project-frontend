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

export class EmploymentInfo {
    constructor(
        public workAuth: string,
        public authStart: string,
        public authEnd: string
    ) { }
}

// for Reference and Emergency contacts
export class UniqueContactList {
    constructor(
        public contacts: UniqueContact[]
    ) { }
}

export class UniqueContact {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: number,
        public relationship: string
    ) { }
}

// TODO: Document Info?