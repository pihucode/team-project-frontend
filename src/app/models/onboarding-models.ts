export class OnboardingRequest {
    constructor(
        public person: Person,
        public visa: Visa,
        public address: Address,
        public referenceList: ReferenceList,
        public emergencyContactList: EmergencyContactList
        // public documentList: DocumentList
    ) { }
}

export class Person {
    constructor(
        public firstname: string,
        public lastname: string,
        public preferredname: string,
        public email: string,
        public personalEmail: string,
        public workEmail: string,
        public cellphone: number,
        public gender: string,
        public ssn: number
    ) { }
}

export class Visa {
    constructor(
        public type: string,
        public dateStart: string,
        public dateEnd: string
    ) { }
}

export class Address {
    constructor(
        public street: string,
        public city: string,
        public state: string,
        public zip: number
    ) { }
}

export class ReferenceList {
    constructor(
        public references: Reference[]
    ) { }
}

export class Reference {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: number,
        public relationship: string
    ) { }
}

export class EmergencyContactList {
    constructor(
        public contacts: EmergencyContact[]
    ) { }
}

export class EmergencyContact {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: number,
        public relationship: string
    ) { }
}

export class DocumentList {
    constructor(
        public documents: Document[]
    ) { }
}

export class Document {
    constructor(
        public file: File
    ) { }
}