import { Module } from '@nestjs/common';
import { databaseMockProviders } from './databasae.provider.mock';

@Module({
  providers: [...databaseMockProviders],
  exports: [...databaseMockProviders],
})
export class DatabaseMockModule {}
