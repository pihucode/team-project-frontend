export class EmailMessage {
    constructor(
        public to: string,
        public subject: string,
        public text: string
    ) { }
}
