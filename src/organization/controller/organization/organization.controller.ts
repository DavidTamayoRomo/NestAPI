import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { OrganizationDto } from 'src/organization/dto/organization.dto';
import { OrganizationService } from 'src/organization/service/organization/organization.service';



@Controller('organization')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) { }

  @Post()
  create(@Body() organization: OrganizationDto): Promise<OrganizationDto> {
    return this.organizationService.create(organization);
  }

  @Get()
  async findAll(): Promise<OrganizationDto[]> {
    return this.organizationService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() organization: OrganizationDto): Promise<any> {
    organization.id = Number(id);
    console.log('Update #' + organization.id)
    return this.organizationService.update(organization);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.organizationService.delete(id);
  }
}
