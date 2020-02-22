import { Logger } from '../utils/logger';
import { Author } from '../models/author';
import { authorSeed } from '../seeds/author.seed';
import { Book } from '../models/book';
import { bookSeed } from '../seeds/book.seed';

export class Seeder {
    public static async seed() {
        try {
            const books = await Book.find({});
            if (!books.length) {
                await Book.insertMany(bookSeed);
                Logger.info('Books seeded.');
            }

            const authors = await Author.find({});
            if (!authors.length) {
                await Author.insertMany(authorSeed);
                Logger.info('Authors seeded.');
            }
        } catch (err) {
            Logger.warn('Seed failed.');
        }
    }
}
