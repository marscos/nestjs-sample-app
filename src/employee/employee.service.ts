import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CreateEmployeeDTO,
  IdentifyEmployeeDTO,
  QueryEmployeeDTO,
  UpdateEmployeeDTO,
} from './employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async getEmployee({ id }: IdentifyEmployeeDTO) {
    return this.prisma.employee.findUniqueOrThrow({
      where: { id },
      include: { department: true },
    });
  }

  async findEmployees({ skip, take, departmentId }: QueryEmployeeDTO) {
    const where = {
      departmentId,
    };
    return {
      result: await this.prisma.employee.findMany({
        where,
        skip,
        take,
      }),
      total: await this.prisma.employee.count({
        where,
      }),
    };
  }

  async createEmployee(data: CreateEmployeeDTO) {
    return this.prisma.employee.create({
      data,
    });
  }

  async updateEmployee({ id }: IdentifyEmployeeDTO, data: UpdateEmployeeDTO) {
    return this.prisma.employee.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteEmployee(dto: IdentifyEmployeeDTO) {
    return this.prisma.employee.delete({ where: dto });
  }
}
