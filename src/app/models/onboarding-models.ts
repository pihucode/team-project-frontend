export class OnboardingRequest {
    constructor(
        public firstname: string,
        public lastname: string,
        public email: string,
        public cellphone: number,
        public gender: string,
        public ssn: number
    ) { }
}