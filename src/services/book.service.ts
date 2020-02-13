import { IBook } from '../interfaces/book';
import { Book } from '../models/book';
import { Service } from 'typedi';

@Service()
export class BookService {
    public getBooks(): Promise<IBook[]> {
        return Book.find({}).exec();
    }
}
