import { NivelPrioridad } from "src/enums/prioridad.enum";
import { Status } from "src/enums/status.enum";
import { Task } from "src/task/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SubTask{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    date: Date;

    @Column()
    descripcion: string;

    @ManyToOne(()=> Task, task => task.subtask,{
        eager: true,
        onDelete: "CASCADE"
    })

    @JoinColumn ()

    task: Task;

}