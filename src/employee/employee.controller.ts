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
  CreateEmployeeDTO,
  EmployeeDTO,
  IdentifyEmployeeDTO,
  QueryEmployeeDTO,
  UpdateEmployeeDTO,
} from './employee.dto';
import { EmployeeService } from './employee.service';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedResponse } from 'src/common/pagination.dto';

@ApiTags('Employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  @ApiOkResponse({ type: EmployeeDTO })
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @Get(':id')
  getEmployee(@Param() params: IdentifyEmployeeDTO) {
    return this.service.getEmployee(params);
  }

  @ApiPaginatedResponse(EmployeeDTO)
  @ApiBadRequestResponse()
  @Get()
  listEmployees(@Query() query: QueryEmployeeDTO) {
    return this.service.findEmployees(query);
  }

  @ApiCreatedResponse({ type: EmployeeDTO })
  @ApiBadRequestResponse()
  @ApiConflictResponse()
  @Post()
  createEmployee(@Body() data: CreateEmployeeDTO) {
    return this.service.createEmployee(data);
  }

  @ApiOkResponse({ type: EmployeeDTO })
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @ApiConflictResponse()
  @Patch(':id')
  updateEmployee(
    @Param() params: IdentifyEmployeeDTO,
    @Body() data: UpdateEmployeeDTO,
  ) {
    return this.service.updateEmployee(params, data);
  }

  @ApiOkResponse({ type: EmployeeDTO })
  @ApiBadRequestResponse()
  @Delete(':id')
  deleteEmployee(@Param() params: IdentifyEmployeeDTO) {
    return this.service.deleteEmployee(params);
  }
}
