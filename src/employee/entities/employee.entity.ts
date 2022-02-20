import { Department } from "src/department/entities/department.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    employeeFirstName: string;
    
    @Column()
    employeeSecondName: string;
    
    @Column()
    employeeDob: Date;
    
    @Column()
    employeeSalary: number;
    
    @ManyToOne(() => Department, {
        eager: true,
        cascade: true,
        onDelete:"SET NULL",
    })
    @JoinColumn()    
    department: Department;
}
