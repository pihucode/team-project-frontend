export class HousingInfo {
    id: number;
    address: string;
    landlord: string;
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
    ) {}

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