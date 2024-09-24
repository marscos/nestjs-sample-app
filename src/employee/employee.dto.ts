import { IsDefined, IsEmail, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { QueryDTO } from 'src/common/query.dto';
import { ApiProperty } from '@nestjs/swagger';

export class QueryEmployeeDTO extends QueryDTO {
  @ApiProperty({ description: "Employee's department ID" })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  departmentId: number;
}

export class IdentifyEmployeeDTO {
  @ApiProperty({ description: 'Employee ID' })
  @IsDefined()
  @IsPositive()
  @Type(() => Number)
  id: number;
}

export class CreateEmployeeDTO {
  @ApiProperty({ description: 'Employee name' })
  @IsDefined()
  name: string;

  @ApiProperty({ description: 'Employee email address' })
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty({ description: "Employee's department ID" })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  departmentId: number;
}

export class UpdateEmployeeDTO {
  @ApiProperty({ description: 'Employee email address' })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ description: "Employee's department ID" })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  departmentId: number;
}
