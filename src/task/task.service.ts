import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService<Task> extends GenericService<Task> {
    constructor(
      @InjectRepository(Task) repository:Repository<Task>){
        super(repository);
      } 
}
