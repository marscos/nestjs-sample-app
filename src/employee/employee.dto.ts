import { IsDefined, IsEmail, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { QueryDTO } from 'src/common/pagination.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DepartmentDTO } from 'src/department/department.dto';

export class QueryEmployeeDTO extends QueryDTO {
  @ApiPropertyOptional({ description: "Employee's department ID" })
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

export class EmployeeDTO {
  @ApiProperty({ description: "Employee's ID" })
  id: number;
  @ApiProperty({ description: "Employee's creation date" })
  createdAt: Date;
  @ApiProperty({ description: "Employee's last update date" })
  updatedAt: Date;
  @ApiProperty({ description: "Employee's name" })
  name: string;
  @ApiProperty({ description: "Employee's unique email" })
  email: string;
  @ApiPropertyOptional({ description: "Employee's department" })
  department?: DepartmentDTO | null;
  @ApiPropertyOptional({ description: "Employee's department ID" })
  departmentId: number | null;
}
