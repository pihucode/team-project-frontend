export class OnboardingRequest {
    constructor(
        public person: Person,
        public visa: Visa
    ) { }
}

export class Person {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
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
