import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateEmployeeDto {
    @ApiProperty()
    @IsString()
    employeeFirstName: string;
    @ApiProperty()
    @IsString()
    employeeSecondName: string;
    @ApiProperty()
    @IsDate()
    employeeDob: Date;
    @ApiProperty()
    @IsNumber()
    employeeSalary: number;
    @ApiProperty()
    @IsNumber()    
    departmentId?: number;
}
