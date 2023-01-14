import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationDto } from 'src/organization/dto/organization.dto';
import { Repository } from 'typeorm';
import { OrganizacionEntity } from '../../entity/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(OrganizacionEntity)
    private organizationRepository: Repository<OrganizacionEntity>
  ){}
  
  create(organization: OrganizationDto): Promise<OrganizationDto> { 
    return this.organizationRepository.save(organization);
  }

  findAll(): Promise<OrganizationDto[]> {
    return this.organizationRepository.find();
  }
}