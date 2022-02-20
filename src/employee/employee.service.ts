import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/department/entities/department.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

  private readonly departmentRepository = getRepository(Department);
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const department = await this.departmentRepository.findOne(createEmployeeDto.departmentId);
    const employee = await this.employeeRepository.save({...createEmployeeDto, department});
    return employee.id;
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne(id);
  }

 async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    if(updateEmployeeDto?.departmentId)
    {
      var department=await this.departmentRepository.findOne(updateEmployeeDto?.departmentId);
      delete updateEmployeeDto?.departmentId
    }
    const data=await this.employeeRepository.update({id:id}, {
      ...updateEmployeeDto,
      department
    });
    return data;
  }

  async remove(id: number) {
    return await this.employeeRepository.delete(id);
  }
}
