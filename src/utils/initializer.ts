import * as autoIncrement from 'mongoose-auto-increment';
import { connection, Schema } from 'mongoose';

export class Initializer {
    public static initializeIncrement(): void {
        autoIncrement.initialize(connection);
    }

    public static initializeSchema(schema: Schema<any>, model: string): void {
        try {
            schema.plugin(autoIncrement.plugin, {
                model,
                startAt: 1
            });
        } catch (err) {
            this.initializeIncrement();
        }
    }
}
