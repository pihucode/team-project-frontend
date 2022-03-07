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
        public startdate: string,
        public expdate: string,
        public daysleft: number,
        public nextStep: string,
        public email: string,
        public filenames: string[]
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

export class DocumentFile {
    constructor(
        public file: FormData | File,
        public type: string
    ) { }
}

export class TestData {
    constructor(
        public data: string
    ) { }
}