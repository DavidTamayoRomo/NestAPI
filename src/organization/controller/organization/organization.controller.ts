import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { OrganizationDto } from 'src/organization/dto/organization.dto';
import { OrganizationService } from 'src/organization/service/organization/organization.service';



@Controller('organization')
export class OrganizationController {
  constructor(private organizationService: OrganizationService){}

  @Post()
  create(@Body() organization: OrganizationDto): Promise<OrganizationDto> {
    return this.organizationService.create(organization);
  }

  @Get()
  async findAll(): Promise<OrganizationDto[]> {
    return this.organizationService.findAll();
  }
}
