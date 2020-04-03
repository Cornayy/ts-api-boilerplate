import { IAuthor } from '../../../types';
import { Author } from './author';
import { Service } from 'typedi';

@Service()
export class AuthorService {
    public async getAuthors(): Promise<IAuthor[]> {
        return await Author.find({}).populate('books');
    }
}
