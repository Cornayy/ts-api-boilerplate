import { IAuthor } from '../../types';
import { Author } from './author';
import { Service } from 'typedi';

@Service()
export class AuthorService {
    public getAuthors(): Promise<IAuthor[]> {
        return Author.find({}).exec();
    }
}
