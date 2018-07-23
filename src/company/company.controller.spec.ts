// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CompanyModule } from './company.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { companyProviders } from './company.provider';

import { DatabaseMockModule } from '../test/database.module.mock';

describe('Company', () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeEach( async () => {
    const module = await Test.createTestingModule({
      imports: [DatabaseMockModule],
      controllers: [CompanyController],
      providers: [
        CompanyService,
        ...companyProviders,
      ],
    }).compile();

    companyController = module.get<CompanyController>(CompanyController);
    companyService = module.get<CompanyService>(CompanyService);
  });

  it('should be true', async () => {
    expect(await companyController).toBeTruthy();
    expect(await companyService).toBeTruthy();
  });
});