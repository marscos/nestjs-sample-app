import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CreateDepartmentDTO,
  IdentifyDepartmentDTO,
  QueryDepartmentDTO,
  UpdateDepartmentDTO,
} from './department.dto';

@Injectable()
export class DepartmentService {
  constructor(private readonly prisma: PrismaService) {}

  async getDepartment({ id }: IdentifyDepartmentDTO) {
    return this.prisma.department.findUniqueOrThrow({ where: { id } });
  }

  async findDepartments({ skip, take }: QueryDepartmentDTO) {
    return {
      result: await this.prisma.department.findMany({
        skip,
        take,
      }),
      total: await this.prisma.department.count(),
    };
  }

  async createDepartment(dto: CreateDepartmentDTO) {
    return this.prisma.department.create({
      data: dto,
    });
  }

  async updateDepartment(
    { id }: IdentifyDepartmentDTO,
    data: UpdateDepartmentDTO,
  ) {
    return this.prisma.department.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteDepartment(dto: IdentifyDepartmentDTO) {
    return this.prisma.department.delete({ where: dto });
  }
}
