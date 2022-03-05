export class HousingInfo {
    // DATA INFERRED FROM INSTRUCTIONS PDF
    // address: Address ??
    address: string;
    // landlord: Person; .name ??
    landlord: string;
    phone: number;
    email: string;
    personCount: number;
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

    // comments: FacilityReportComment[];
}

export class FacilityReportComment {
    description: string;
    createdBy: string;
    commentDate: string; // DATE??
}