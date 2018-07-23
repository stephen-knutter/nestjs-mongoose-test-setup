import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose-fix';

export const databaseMockProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;

      const mockgoose = new Mockgoose(mongoose);
      mockgoose.helper.setDbVersion('3.4.3');

      mockgoose.prepareStorage()
        .then( async () => {
          await mongoose.connect('mongodb://localhost:27017/crunchbase', {
            useMongoClient: true,
          });
        });

      return mongoose;
    },
  },
];
