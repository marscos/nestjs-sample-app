import { IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryDTO {
  @ApiPropertyOptional({
    description: 'Number of resources to skip (for pagination).',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  skip?: number;

  @ApiPropertyOptional({
    description: 'Number of resources to retrieve (for pagination).',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  take?: number;
}
