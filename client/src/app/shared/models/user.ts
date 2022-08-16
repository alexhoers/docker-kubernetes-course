export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}