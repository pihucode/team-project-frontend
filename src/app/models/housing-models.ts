export class HousingInfo {
    id: number;
    address: string;
    landlordName: string;
    landlordEmail: string;
    landlordPhone: number;
    numPeople: number;
}

export class FacilityReport {
    constructor(
        public title: string,
        public description: string,
        public createdBy: string,
        public reportDate: string, // DATE??
        public status: string,
    ) { }

    clear = () => {
        this.title = '';
        this.description = '';
        this.createdBy = '';
        this.reportDate = '';
        this.status = '';
    }
}

export class FacilityReportComment {
    description: string;
    createdBy: string;
    commentDate: string; // DATE??
}

export class FacilityInfo {
    beds: number;
    chairs: number;
    tables: number;
    mattresses: number;
}

export class Landlord {
    id: number;
    fullname: string;
    email: string;
}

export class AddHouseRequest {
    constructor(
        public street: string,
        public city: string,
        public state: string,
        public zip: number,
        public beds: number,
        public mattresses: number,
        public tables: number,
        public chairs: number,
        public landlord: number,
        public numPeople: number,
    ) { }
}