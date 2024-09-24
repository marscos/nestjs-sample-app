import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateDepartmentDTO,
  IdentifyDepartmentDTO,
  QueryDepartmentDTO,
  UpdateDepartmentDTO,
} from './department.dto';
import { DepartmentService } from './department.service';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentController {
  constructor(private readonly service: DepartmentService) {}

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @Get(':id')
  getDepartment(@Param() params: IdentifyDepartmentDTO) {
    return this.service.getDepartment(params);
  }

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @Get()
  listDepartments(@Query() query: QueryDepartmentDTO) {
    return this.service.findDepartments(query);
  }

  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiConflictResponse()
  @Post()
  createDepartment(@Body() data: CreateDepartmentDTO) {
    return this.service.createDepartment(data);
  }

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @ApiConflictResponse()
  @Patch(':id')
  updateDepartment(
    @Param() params: IdentifyDepartmentDTO,
    @Body() data: UpdateDepartmentDTO,
  ) {
    return this.service.updateDepartment(params, data);
  }

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @Delete(':id')
  deleteDepartment(@Param() params: IdentifyDepartmentDTO) {
    return this.service.deleteDepartment(params);
  }
}
