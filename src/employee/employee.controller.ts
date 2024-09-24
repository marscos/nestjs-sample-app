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

@ApiTags('Employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  @ApiOkResponse()
  @ApiNotFoundResponse()
  @ApiBadRequestResponse()
  @Get(':id')
  getEmployee(@Param() params: IdentifyEmployeeDTO) {
    return this.service.getEmployee(params);
  }

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @Get()
  listEmployees(@Query() query: QueryEmployeeDTO) {
    return this.service.findEmployees(query);
  }

  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiConflictResponse()
  @Post()
  createEmployee(@Body() data: CreateEmployeeDTO) {
    return this.service.createEmployee(data);
  }

  @ApiOkResponse()
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

  @ApiOkResponse()
  @ApiBadRequestResponse()
  @Delete(':id')
  deleteEmployee(@Param() params: IdentifyEmployeeDTO) {
    return this.service.deleteEmployee(params);
  }
}
