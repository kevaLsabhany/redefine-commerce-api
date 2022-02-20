import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDepartmentDto {
    @ApiProperty()
    @IsString()
    departmentName: string;
    @ApiProperty()
    @IsString()
    departmentDetails: string;
}
