import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('organization')
export class OrganizacionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  status: number;
}
