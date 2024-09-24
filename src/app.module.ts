import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';

@Module({
  imports: [],
  controllers: [DepartmentController, EmployeeController],
  providers: [PrismaService, DepartmentService, EmployeeService],
})
export class AppModule {}
