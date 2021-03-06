export class UsernameTakenError extends Error {
    constructor(public code: number, message?: string) {
        super(message);
        this.code = code;
        this.name = 'UsernameTakenError';
    }
}
