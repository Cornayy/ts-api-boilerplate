import { IController } from './../interfaces/controller';
import { Service } from 'typedi';

@Service()
export class UserController implements IController {
    getAll(): void {
        throw new Error('Method not implemented.');
    }

    get(): void {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
