import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsObject, IsOptional, IsString, Length } from "class-validator";
import { Task } from "src/task/task.entity";

export class SubTaskDto {
    
    @Length(5)
    @IsString()
    name: string;

    @Type(()=> Date)
    @IsOptional()
    date: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsObject()
    @IsNotEmpty()
    task: Task;
    
}
