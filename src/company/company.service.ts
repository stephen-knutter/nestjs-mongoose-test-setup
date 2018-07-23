import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Company } from './company.interface';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('CompanyModelToken')
    private readonly companyModel: Model<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return await this.companyModel.find().exec();
  }
}
