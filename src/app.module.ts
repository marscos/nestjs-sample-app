import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';

@Module({
  imports: [],
  controllers: [DepartmentController],
  providers: [PrismaService, DepartmentService],
})
export class AppModule {}
