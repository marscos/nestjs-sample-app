import { IsDefined, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { QueryDTO } from 'src/common/pagination.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class QueryDepartmentDTO extends QueryDTO {}

export class IdentifyDepartmentDTO {
  @ApiProperty({ description: 'Department ID' })
  @IsDefined()
  @IsPositive()
  @Type(() => Number)
  id: number;
}

export class CreateDepartmentDTO {
  @ApiProperty({ description: 'Department name' })
  @IsDefined()
  name: string;
}

export class UpdateDepartmentDTO {
  @ApiPropertyOptional({ description: 'Department name' })
  @IsOptional()
  name: string;
}
export class DepartmentDTO {
  @ApiProperty({ description: 'Department ID' })
  id: number;
  @ApiProperty({ description: 'Date of creation' })
  createdAt: Date;
  @ApiProperty({ description: 'Date of last update' })
  updatedAt: Date;
  @ApiProperty({ description: 'Department name' })
  name: string;
}
