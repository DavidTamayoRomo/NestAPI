import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './controller/organization/organization.controller';
import { OrganizacionEntity } from './entity/organization.entity';
import { OrganizationService } from './service/organization/organization.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizacionEntity])],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
