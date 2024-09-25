import { IsOptional, IsPositive } from 'class-validator';
import { Type as TransformType } from 'class-transformer';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  ApiPropertyOptional,
  getSchemaPath,
} from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';

export class QueryDTO {
  @ApiPropertyOptional({
    description: 'Number of resources to skip (for pagination).',
  })
  @IsOptional()
  @IsPositive()
  @TransformType(() => Number)
  skip?: number;

  @ApiPropertyOptional({
    description: 'Number of resources to retrieve (for pagination).',
  })
  @IsOptional()
  @IsPositive()
  @TransformType(() => Number)
  take?: number;
}

export class PaginatedResponseDTO<TData> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  result: TData[];
}

export class PageRequestDTO {
  @ApiPropertyOptional({
    description: 'Number of resources to skip.',
  })
  @IsOptional()
  @IsPositive()
  @TransformType(() => Number)
  skip?: number;

  @ApiPropertyOptional({
    description: 'Number of resources to retrieve.',
  })
  @IsOptional()
  @IsPositive()
  @TransformType(() => Number)
  take?: number;
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(PageRequestDTO, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageRequestDTO) },
          {
            properties: {
              result: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};
