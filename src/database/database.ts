import { Logger } from '../utils/Logger';
import * as mongoose from 'mongoose';
import { Author } from '../models/author';
import { authorSeed } from '../seeds/author.seed';
import { Book } from '../models/book';
import { bookSeed } from '../seeds/book.seed';
import { Service } from 'typedi';

@Service()
export class Database {
    constructor() {
        this.seed();
    }

    private seed() {
        Book.find({})
            .exec()
            .then(books => {
                if (!books.length) {
                    Book.insertMany(bookSeed)
                        .then(() => Logger.info('Books seeded.'))
                        .catch(() => Logger.warn('Book seed failed.'));
                }
            });

        Author.find({})
            .exec()
            .then(authors => {
                if (!authors.length) {
                    Author.insertMany(authorSeed)
                        .then(() => Logger.info('Authors seeded.'))
                        .catch(() => Logger.warn('Authors seed failed.'));
                }
            });
    }

    public connect() {
        try {
            mongoose.connect('mongodb://localhost:27017/bookstore', {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        } catch (err) {
            process.exit(0);
        }
    }
}
