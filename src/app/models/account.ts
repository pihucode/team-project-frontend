export class Account {
    constructor(
        public password: string,
        public username: string,
        public email: string
    ) {}

    public clear = () => {
        this.password = '';
        this.username = '';
        this.email = '';
    } 
}
