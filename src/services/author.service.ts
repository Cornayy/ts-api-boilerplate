import { IAuthor } from '../interfaces/author';
import { Author } from '../models/author';
import { Service } from 'typedi';

@Service()
export class AuthorService {
    public getAuthors(): Promise<IAuthor[]> {
        return Author.find({}).exec();
    }
}
