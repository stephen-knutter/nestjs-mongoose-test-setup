import { Connection } from 'mongoose';
import { CompanySchema } from './company.schema';

export const companyProviders = [
  {
    provide: 'CompanyModelToken',
    useFactory: (mongoose) => mongoose.connection.model('Company', CompanySchema),
    inject: ['DbConnectionToken'],
  },
];
