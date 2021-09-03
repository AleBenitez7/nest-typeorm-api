import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/Abstract/genericService';
import { getRepository, Repository } from 'typeorm';
import { SubTask } from './sub-tasks.entity';

@Injectable()
export class SubTaskService<SubTask> extends GenericService<SubTask> {
    constructor(
        @InjectRepository(SubTask)
        repository: Repository<SubTask>
      ) {
        super(repository);
      }
      
      async getByIdTask(taskId: number){
        const data = getRepository(SubTask).createQueryBuilder('subtask')
                     .where("subtask.taskId = :taskId", {taskId: taskId}).getMany();
        return data;
    }
  }

