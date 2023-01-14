import { IsNumber, IsString } from "class-validator";

export class OrganizationDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  status: number;
}
