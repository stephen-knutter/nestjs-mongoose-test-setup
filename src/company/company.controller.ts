import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.interface';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  async findAll(): Promise<Company[]> {
    return await this.companyService.findAll();
  }
}
