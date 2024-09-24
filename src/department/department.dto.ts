import { IsDefined, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { QueryDTO } from 'src/common/query.dto';
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
