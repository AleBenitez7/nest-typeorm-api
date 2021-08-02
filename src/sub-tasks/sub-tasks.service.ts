import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { SubTaskDto } from './sub-tasks.dto';
import { SubTask } from './sub-tasks.entity';

@Injectable()
export class SubTaskService {
    constructor(
        @InjectRepository(SubTask)
        private readonly repository: Repository<SubTask>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
      async getByIdTask(taskId: number){
        const data = getRepository(SubTask).createQueryBuilder('subtask')
                     .where("subtask.taskId = :taskId", {taskId: taskId}).getMany();
        return data;
      }
    
      async getById(id: number) {
        const subtask = await this.repository.findOne(id);
        if (!subtask) throw new NotFoundException('SubTask does not exist');
        return subtask;
      }
    
      async createOne(dto: SubTaskDto) {
        const subtask = this.repository.create(dto);
        return await this.repository.save(subtask);
      }
    
      async editOne(id: number, dto: SubTaskDto) {
        const subtask = await this.repository.findOne(id);
    
        if (!subtask) throw new NotFoundException('SubTask does not exist');
    
        const editedTask = Object.assign(subtask, dto);
        return await this.repository.save(editedTask);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}

