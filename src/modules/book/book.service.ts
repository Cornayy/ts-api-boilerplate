import { IBook } from '../../../types';
import { Book } from './book';
import { Service } from 'typedi';

@Service()
export class BookService {
    public getBooks(): Promise<IBook[]> {
        return Book.find({}).exec();
    }
}
