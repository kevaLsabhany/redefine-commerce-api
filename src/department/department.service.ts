import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {

  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = await this.departmentRepository.save(createDepartmentDto);
    return department.id;
  }

  async findAll() {
    return await this.departmentRepository.find();
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOne(id);
  }

  async remove(id: number) {
    return await this.departmentRepository.delete(id);
  }
}
