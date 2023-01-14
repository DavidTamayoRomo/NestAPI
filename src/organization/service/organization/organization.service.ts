import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationDto } from 'src/organization/dto/organization.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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

  //editar
  update(organization: OrganizationDto): Promise<UpdateResult> {
    return this.organizationRepository.update(organization.id, organization);
  }

  //eliminar
  delete(id: number): Promise<DeleteResult> {
    return this.organizationRepository.delete(id);
  }
  
}