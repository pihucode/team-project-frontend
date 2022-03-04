export class EmployeeProfile {
    constructor(
        public name: string,
        public ssn: number,
        public startDate: string,
        public visaStatus: string,
        public position: number
    ) { }
}

export class VisaInfo {
    constructor(
        public fullname: string,
        public workauth: string,
        public expdate: string,
        public daysleft: number
        // public documents: string,
    ) { }
}

export class EmployeeVisaInfo {
    constructor(
        public fullname: string,
        public workAuth: string,
        public email: string,
        public daysLeft: number,
        public startDate: string,
        public endDate: string
    ) { }
}

export class Document {
    constructor(
        public file: File,
        public type: string
    ) { }
}