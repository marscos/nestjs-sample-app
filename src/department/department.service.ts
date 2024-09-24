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

  async getDepartment(dto: IdentifyDepartmentDTO) {
    return this.prisma.department.findUniqueOrThrow({ where: dto });
  }

  async findDepartments(dto: QueryDepartmentDTO) {
    return this.prisma.department.findMany({
      ...dto,
    });
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
