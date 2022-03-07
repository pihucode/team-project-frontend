export class ApplicationInfo {
    firstname: string;
    lastname: string;
    preferredName: string;
    ssn: number;
    // gender: string;
    // date_birth: string;
    // status: string;

    street: string;
    city: string;
    state: string;
    zip: number;

    personalEmail: string;
    workEmail: string;
    cellphone: number;
    workphone: number;


    visaType: string;
    visaStartDate: string;
    visaEndDate: string;
}

export class AppCommentRequest {
    firstname: string;
    lastname: string;
    preferredName: string;
    ssn: string;

    street: string;
    city: string;
    state: string;
    zip: string;

    personalEmail: string;
    workEmail: string;
    cellphone: string;
    workphone: string;


    visaType: string;
    visaStartDate: string;
    visaEndDate: string;

    emergencyContacts: string;
    references: string;
    documents: string;
    general: string;
}