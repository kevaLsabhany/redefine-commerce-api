import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    departmentName: string;

    @Column()
    departmentDetails: string;
}
